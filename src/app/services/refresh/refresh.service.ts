import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {
  private source: string | null = null;

  set__source(source: string): void {
    this.source = source;
  }

  get__source(): string | null {
    return this.source;
  }
}