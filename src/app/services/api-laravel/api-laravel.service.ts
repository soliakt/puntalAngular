import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiLaravelService {
    private defaultURL = "http://prodeveloplaravel.test/api";
    constructor(private http: HttpClient) { }
    getReservationInfoFiltered(): Observable<any[]> {
      return this.http.get<any[]>(`${this.defaultURL}/reservation/all/getReservationInfoFiltered`);
  }
}
