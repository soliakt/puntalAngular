import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

//Importar la interfaz y el servicio

import { Generic } from "../../../interfaces/generic";
import { GenericsService } from "../../../services/generics/generics.service";
import { RouterOutlet } from "@angular/router";
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-aduana-table',
  standalone: true,

  imports: [RouterOutlet, FormsModule],
  templateUrl: "./aduana-table.component.html",
  styleUrl: "./aduana-table.component.css",

})
export class AduanaTableComponent {
  //Construir array de la interfaz
  generics: Generic[] = [];

  selectAll: boolean = false;


  constructor(
    private genericsService: GenericsService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.recover();
  }

  recover() {
    this.genericsService.getLogsFiltered().subscribe((generics: Generic[]) => {
      this.loadTableJS();
      this.generics = generics;
    });
  }

  loadTableJS() {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = './assets/javascript/table.js';
    script.defer = true;
    this.renderer.appendChild(this.el.nativeElement, script);
  }

  markAsSeen(reservation_id: number) {
    this.genericsService.markAsSeen(reservation_id).subscribe(
      (response) => {
        console.log("Marcado como leido:", response);
      },
      (error) => {
        console.error("Error al marcar como leido:", error);
      }
    );
  }

  onSelectAllChange(event: any) {
    console.log("Entra a la función");
    if (event.target.checked == true) {
      console.log("Checkbox marcado");
      this.markAllAsSeen();
    } else {
      console.log("Checkbox desmarcado");
    }
  }

  markAllAsSeen() {
    this.genericsService.markPageAsSeen().subscribe(
      (response) => {
        console.log("Página marcada como leida:", response);
      },
      (error) => {
        console.error("Error al marcar como leido:", error);
      }
    );
  }
}
