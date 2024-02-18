import { Component, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { ApiLaravelService } from '../../services/api-laravel/api-laravel.service';
import { MobileSectionService } from '../../services/mobile-section/mobile-section.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mobile-table',
  templateUrl: './mobile-table.component.html',
  styleUrls: ['./mobile-table.component.css']
})
export class MobileTableComponent implements OnInit, OnDestroy {
  data: any[] = [];
  selectedItem: string | undefined;
  private subscription: Subscription = new Subscription();

  constructor(
    private apiLaravelService: ApiLaravelService,
    private mobilesectionService: MobileSectionService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.subscribeToSelectedItem();
    this.recover();
    this.loadTableJS();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  subscribeToSelectedItem() {
    this.subscription = this.mobilesectionService.selectedItem$.subscribe(item => {
      this.selectedItem = item;
      this.recover();
    });
  }

  recover() {
    if (this.selectedItem === 'Entradas') {
      this.apiLaravelService.getReservationInfoFiltered().subscribe((data: any[]) => {
        this.data = data.filter(item => !item.date_entry_confirmed);
      });
    } else if (this.selectedItem === 'Salidas') {
      this.apiLaravelService.getReservationInfoFiltered().subscribe((data: any[]) => {
        this.data = data.filter(item => !item.date_exit_confirmed);
      });
    } else {
      this.apiLaravelService.getReservationInfoFiltered().subscribe((data: any[]) => {
        this.data = data;
      });
    }
  }

  loadTableJS() {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = './assets/javascript/mobile-table.js';
    script.defer = true;
    this.renderer.appendChild(this.el.nativeElement, script);
  }
}