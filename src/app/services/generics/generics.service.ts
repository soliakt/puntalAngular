import { Injectable } from '@angular/core';
// Importante: importar la interfaz y http
// Es la interfaz que define la estructura de un objeto "Generic".
import { Generic } from '../../interfaces/generic';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GenericsService {
  private urlApi = '../assets/data-example.json';

  // Al constructor se inyecta el servicio HttpClient.
  constructor(private http: HttpClient) {}

  // Este método utiliza el servicio HttpClient para realizar una solicitud GET a la URL especificada (this.urlApi).
  returnService() {
    return this.http.get<Generic[]>(this.urlApi);
  }
}
