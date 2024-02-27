import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiLaravelService {
  private defaultURL = "http://127.0.0.1:8000/api";
  constructor(private http: HttpClient) {}
  getReservationInfoFiltered(): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.defaultURL}/reservation/all/getReservationInfoFiltered`
    );
  } 
  getLogsFiltered(): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.defaultURL}/reservation/all/getLogsFiltered`
    );
  }
  updateReservationConfirmation(reservationId: number): Observable<any> {
    return this.http.put<any>(
      `${this.defaultURL}/reservation/update/status/${reservationId}`, {}
    );
  }
  saveImagePath(reservationId:number, relativePath: string){
    return this.http.put<any>(
      `${this.defaultURL}/reservation/update/image/${reservationId}`, {relativePath}
    );
  }

  getImage(reservationId: number){
    return this.http.get<any>(
      `${this.defaultURL}/reservation/get/image/${reservationId}`
    );

  }

}
