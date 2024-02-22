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

  constructor() { }

  setShowForm(value: boolean): void {
    this.showFormSubject.next(value);
  }

  setFormData(data: any): void {
    this.formDataSubject.next(data);
  }
}