import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileSectionService {
  private selectedItemSubject = new Subject<string>();

  selectedItem$ = this.selectedItemSubject.asObservable();

  selectItem(item: string) {
    this.selectedItemSubject.next(item);
  }
}
