import { Component,  OnInit, ElementRef, Renderer2 } from '@angular/core';
//Importar la interfaz y el servicio
import { Generic } from "../../interfaces/generic";
import { GenericsService } from '../../services/generics/generics.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{

  //Construir array de la interfaz
  generics: Generic[] =[];

  constructor(private genericsService: GenericsService, private renderer: Renderer2, private el: ElementRef) {
    this.recover()
  }

  ngOnInit() {
    this.loadTableJS();
  }

  recover() {
    this.genericsService.returnService().subscribe((generics: Generic[]) => {
      this.generics = generics
    });
  }

  loadTableJS() {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = './assets/javascript/table.js';
    script.defer = true;
    this.renderer.appendChild(this.el.nativeElement, script);
  }

}
