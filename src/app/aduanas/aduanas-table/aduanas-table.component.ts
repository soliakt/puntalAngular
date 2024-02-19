import { Component, Input, OnInit, Inject } from '@angular/core';

//Importar la interfaz y el servicio
import { Generic } from '../../interfaces/generic';
import { GenericsService } from '../../services/generics/generics.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-aduanas-table',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './aduanas-table.component.html',
  styleUrl: './aduanas-table.component.css',
})
export class AduanasTableComponent {
  @Input() datos: String[][] = [];

  //Construir array de la interfaz
  generics: Generic[] = [];

  constructor(private genericsService: GenericsService) {
    this.recover();
  }

  recover() {
    this.genericsService.returnService().subscribe((generics: Generic[]) => {
      this.generics = generics;
    });
    console.log(this.generics);
  }
  logs() {
    

  }
}
