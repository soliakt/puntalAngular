import { Component, OnInit, OnDestroy, ElementRef, Renderer2, Output, EventEmitter, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiLaravelService } from '../../services/api-laravel/api-laravel.service';
import { MobileSectionService } from '../../services/mobile-section/mobile-section.service';
import { Subscription } from 'rxjs';
import { FormCheckerService } from '../../services/form-check/form-checker.service';

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
  currentDate: string;
  tableWatcher: boolean;

  constructor(
    private apiLaravelService: ApiLaravelService,
    private mobilesectionService: MobileSectionService,
    private formCheckerService: FormCheckerService,
    private renderer: Renderer2,
    private el: ElementRef,
    private fb: FormBuilder,
  ) {
    this.tableWatcher = false;
    this.currentDate = new Date().toISOString().slice(0, 10);
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
        return 'Registros realizados';
      default:
        return 'Próximas entradas y salidas';
    }
  }

  recover(){
    const today = new Date().toISOString().slice(0, 10);
    if (this.selectedTitleItem === 'Próximas entradas') {
      this.apiLaravelService.getReservationInfoFiltered().subscribe((data: any[]) => {
        this.data = data.filter(item => !item.date_entry_confirmed);
        console.log("Entrada:" + this.data);
      }, error => {
        console.error('Error fetching Próximas entradas data:', error);
      });
    } else if (this.selectedTitleItem === 'Próximas salidas') {
      this.apiLaravelService.getReservationInfoFiltered().subscribe((data: any[]) => {
        this.data = data.filter(item => !item.date_exit_confirmed && item.date_entry_confirmed);
        console.log("Salida:" + this.data);
      }, error => {
        console.error('Error fetching Próximas salidas data:', error);
      });
    } else if (this.selectedTitleItem === 'Registros realizados') {
      this.apiLaravelService.getReservationInfoFiltered().subscribe((data: any[]) => {
        this.data = data.filter(item => item.date_entry_confirmed === today && !item.date_exit_confirmed);
        console.log("Registros:" + this.data);
      }, error => {
        console.error('Error fetching Registros realizados data:', error);
      });
    } else {
      this.apiLaravelService.getReservationInfoFiltered().subscribe((data: any[]) => {
        if(!this.tableWatcher){
          this.loadTableJS();
          this.tableWatcher = true;
        }
        this.data = data;
        console.log("Inicio:" + this.data);
      }, error => {
        console.error('Error fetching data for default case:', error);
      });
    }
  }
  

  loadTableJS(){
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = './assets/javascript/mobile-table.js';
    script.defer = true;
    document.body.appendChild(script);
  }

  onRowClick(index: number) {
    const showForm = true;
    this.formCheckerService.setShowForm(showForm);
    console.log(this.data[index]);
    this.formCheckerService.setFormData(this.data[index]);
  }
}