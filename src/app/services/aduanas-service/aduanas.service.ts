import { Injectable } from "@angular/core";
// Importante: importar la interfaz y http
// Es la interfaz que define la estructura de un objeto "Generic".
import { AduanasInterface } from "../../interfaces/aduanas-interface";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AduanasService {
  private urlApi = "http://127.0.0.1:8000/api";

  // Al constructor se inyecta el servicio HttpClient.
  constructor(private http: HttpClient) {}

  // Este método utiliza el servicio HttpClient para realizar una solicitud GET a la URL especificada (this.urlApi).
  getLogsFiltered() {
    return this.http.get<AduanasInterface[]>(
      `${this.urlApi}/reservation/all/getLogsFiltered`
    );
  }
  markAsSeen(reservationId: number) {
    return this.http.put<AduanasInterface[]>(
      `${this.urlApi}/reservation/markLogAsSeen/${reservationId}`,
      {}
    );
  }

  markPageAsSeen() {
    return this.http.put<AduanasInterface[]>(
      `${this.urlApi}/reservation/markLogPageAsSeen`,
      {}
    );
  }
}
