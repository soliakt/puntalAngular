import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormCheckerService {
  private showFormSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showForm$: Observable<boolean> = this.showFormSubject.asObservable();

  private formDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  formData$: Observable<any> = this.formDataSubject.asObservable();

  private showIncidentSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showIncident$: Observable<boolean> = this.showIncidentSubject.asObservable();

  constructor() { }

  setShowForm(value: boolean): void {
    this.showFormSubject.next(value);
  }

  setShowIncident(value: boolean): void{
    this.showIncidentSubject.next(value);
  }

  setFormData(data: any): void {
    this.formDataSubject.next(data);
  }
}