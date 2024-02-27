import { Injectable } from "@angular/core";
import { AduanasInterface } from "../../interfaces/aduanas-interface";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})

//Servicio para conectar Aduanas con la Api
export class AduanasService {
  private urlApi = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) {}

  //Functión para traer los logs de Aduanas desde la Api
  getLogsFiltered() {
    return this.http.get<AduanasInterface[]>(
      `${this.urlApi}/reservation/all/getLogsFiltered`
    );
  }

  //Functión para marcar un log como visto
  markAsSeen(reservationId: number) {
    return this.http.put<AduanasInterface[]>(
      `${this.urlApi}/reservation/markLogAsSeen/${reservationId}`,
      {}
    );
  }

  //Functión para marcar la página de logs como vista
  markPageAsSeen() {
    return this.http.put<AduanasInterface[]>(
      `${this.urlApi}/reservation/markLogPageAsSeen`,
      {}
    );
  }
}
