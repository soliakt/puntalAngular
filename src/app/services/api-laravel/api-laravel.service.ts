import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiLaravelService {

  private defaultURL = "http://127.0.0.1:8000/api";
  constructor(private http: HttpClient) { }

  getReservationInfoFiltered(): Observable<any[]> { // Observable = programación asíncrona, es decir, secuencias de eventos
    // en lugar de esperar sincrónicamente a que llegue la respuesta, nos suscribimos a un Observable y recibimos notificaciones cuando la respuesta esté lista
    return this.http.get<any[]>(`${this.defaultURL}/reservation/all/getReservationInfoFiltered`);
  }

  updateReservationConfirmation(reservationId: number): Observable<any> {
    return this.http.put<any>(`${this.defaultURL}/reservation/update/status/${reservationId}`, {});
  }

}
