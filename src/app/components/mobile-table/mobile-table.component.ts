import { Component, OnInit, OnDestroy, ElementRef, Renderer2, Output, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiLaravelService } from '../../services/api-laravel/api-laravel.service';
import { MobileSectionService } from '../../services/mobile-section/mobile-section.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-table',
  templateUrl: './mobile-table.component.html',
  styleUrls: ['./mobile-table.component.css']
})
export class MobileTableComponent implements OnInit, OnDestroy {
  data: any[] = [];
  selectedItem: string | undefined;
  subscription: Subscription = new Subscription();
  selectedTitleItem: string = 'Próximas entradas y salidas';
  dataSelectionRow: any;
  form: FormGroup;
  @Output() rowDataSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private apiLaravelService: ApiLaravelService,
    private mobilesectionService: MobileSectionService,
    private renderer: Renderer2,
    private router: Router,
    private el: ElementRef,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      plate: [''],
      captain_name: [''],
      captain_id: [''],
      harbour: [''],
      berth: ['']
    });
  }

  ngOnInit(){
    this.subscribeToSelectedItem();
    this.recover();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  subscribeToSelectedItem(){
    this.subscription = this.mobilesectionService.selectedItem$.subscribe(item => {
      this.selectedItem = item;
      this.selectedTitleItem = this.getSelectedTitle(item);
      this.recover();
    });
  }

  getSelectedTitle(item: string): string {
    switch (item) {
      case 'Entradas':
        return 'Próximas entradas';
      case 'Salidas':
        return 'Próximas salidas';
      case 'Registros':
        return "Registros realizados";
      default:
        return 'Próximas entradas y salidas';
    }
  }

  recover(){
    const today = new Date().toISOString().slice(0, 10);
    if (this.selectedItem === 'Entradas') {
      this.apiLaravelService.getReservationInfoFiltered().subscribe((data: any[]) => {
        this.loadTableJS();
        this.data = data.filter(item => !item.date_entry_confirmed);
      });
    } else if (this.selectedItem === 'Salidas') {
      this.apiLaravelService.getReservationInfoFiltered().subscribe((data: any[]) => {
        this.loadTableJS();
        this.data = data.filter(item => !item.date_exit_confirmed && item.date_entry_confirmed);
      });
    } else if (this.selectedItem === 'Registros') {
      this.apiLaravelService.getReservationInfoFiltered().subscribe((data: any[]) => {
        this.loadTableJS();
        this.data = data.filter(item => item.date_entry_confirmed === today && !item.date_exit_confirmed);
      });
    } else {
      this.apiLaravelService.getReservationInfoFiltered().subscribe((data: any[]) => {
        this.loadTableJS();
        this.data = data;
      });
    }
  }

  loadTableJS(){
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = './assets/javascript/mobile-table.js';
    script.defer = true;
    this.renderer.appendChild(this.el.nativeElement, script);
  }

  onRowClick(index: number){
    this.dataSelectionRow = this.data[index];
    this.rowDataSelected.emit(this.dataSelectionRow);
    this.router.navigate(['/mobile-form']);
    console.log('After navigation');
  }
}