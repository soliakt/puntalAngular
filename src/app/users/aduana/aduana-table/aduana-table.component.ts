import { Component, OnInit, ElementRef, Renderer2 } from "@angular/core";

//Importar la interfaz y el servicio

import { AduanasInterface } from "../../../interfaces/aduanas-interface";
import { AduanasService } from "../../../services/aduanas-service/aduanas.service";
import { RouterOutlet } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-aduana-table",
  standalone: true,

  imports: [RouterOutlet, FormsModule],
  templateUrl: "./aduana-table.component.html",
  styleUrl: "./aduana-table.component.css",
})
export class AduanaTableComponent {
  //Construir array de la interfaz
  aduanas: AduanasInterface[] = [];

  selectAll: boolean = false;

  constructor(
    private aduanasService: AduanasService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.recover();
  }

  //Función para traer los datos de la tabla y cargarla
  recover() {
    this.aduanasService
      .getLogsFiltered()
      .subscribe((aduanas: AduanasInterface[]) => {
        this.loadTableJS();
        this.aduanas = aduanas;
      });
  }

  //Función para cargar la datatable desde un archivo js externo
  loadTableJS() {
    const script = this.renderer.createElement("script");
    script.type = "text/javascript";
    script.src = "./assets/javascript/table.js";
    script.defer = true;
    this.renderer.appendChild(this.el.nativeElement, script);
  }

  //Función para marcar como leido el registro clicado
  markAsSeen(reservation_id: number) {
    this.aduanasService.markAsSeen(reservation_id).subscribe(
      (response) => {
        console.log("Marcado como leido:", response);
      },
      (error) => {
        console.error("Error al marcar como leido:", error);
      }
    );
  }

  //Función para comprobar si el checkbox de marcar todos como leido está marcado y si lo está hace la función markAllAsSeen
  onSelectAllChange(event: any) {
    console.log("Entra a la función");
    if (event.target.checked == true) {
      console.log("Checkbox marcado");
      this.markAllAsSeen();
    } else {
      console.log("Checkbox desmarcado");
    }
  }

  //Función para marcar como leidos los 10 primeros registros
  markAllAsSeen() {
    this.aduanasService.markPageAsSeen().subscribe(
      (response) => {
        console.log("Página marcada como leida:", response);
      },
      (error) => {
        console.error("Error al marcar como leido:", error);
      }
    );
  }
}
