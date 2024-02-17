import { Component, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { Generic } from '../../interfaces/generic';
import { GenericsService } from '../../services/generics/generics.service';
import { MobileSectionService } from '../../services/mobile-section/mobile-section.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mobile-table',
  standalone: true,
  imports: [],
  templateUrl: './mobile-table.component.html',
  styleUrl: './mobile-table.component.css'
})
export class MobileTableComponent {
  generics: Generic[] = [];
  selectedItem: string | undefined;
  private subscription: Subscription = new Subscription();

  constructor(
    private genericsService: GenericsService,
    private mobilesectionService: MobileSectionService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.recover();
    this.loadTableJS();

    this.subscription = this.mobilesectionService.selectedItem$.subscribe(item => {
      this.selectedItem = item;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  recover() {
    this.genericsService.returnService().subscribe((generics: Generic[]) => {
      this.generics = generics;
    });
  }

  loadTableJS() {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = './assets/javascript/mobile-table.js';
    script.defer = true;
    this.renderer.appendChild(this.el.nativeElement, script);
  }
}
