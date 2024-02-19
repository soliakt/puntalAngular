import { Component, OnInit, ElementRef, Renderer2 } from "@angular/core";

//Importar la interfaz y el servicio
import { Generic } from "../../../interfaces/generic";
import { GenericsService } from "../../../services/generics/generics.service";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-aduana-table",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./aduana-table.component.html",
  styleUrl: "./aduana-table.component.css",
})
export class AduanaTableComponent implements OnInit {
  //Construir array de la interfaz
  generics: Generic[] = [];

  constructor(
    private genericsService: GenericsService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.loadTableJS();
    this.recover();
  }

  recover() {
    this.genericsService.getLogsFiltered().subscribe((generics: Generic[]) => {
      this.generics = generics;
    });
  }

  loadTableJS() {
    const script = this.renderer.createElement("script");
    script.type = "text/javascript";
    script.src = "./assets/javascript/table.js";
    script.defer = true;
    this.renderer.appendChild(this.el.nativeElement, script);
  }
}
