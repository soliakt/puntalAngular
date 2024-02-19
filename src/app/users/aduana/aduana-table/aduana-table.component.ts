import { Component, OnInit, ElementRef, Renderer2 } from "@angular/core";

//Importar la interfaz y el servicio
import { Generic } from "../../../interfaces/generic";
import { GenericsService } from "../../../services/generics/generics.service";
import { RouterOutlet } from "@angular/router";
import { Subscription } from "rxjs";
import { ApiLaravelService } from "../../../services/api-laravel/api-laravel.service";
import { MobileSectionService } from "../../../services/mobile-section/mobile-section.service";

@Component({
  selector: "app-aduana-table",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./aduana-table.component.html",
  styleUrl: "./aduana-table.component.css",
})
export class AduanaTableComponent implements OnInit {
  //Construir array de la interfaz
  data: any[] = [];
  selectedItem: string | undefined;
  private subscription: Subscription = new Subscription();

  constructor(
    private genericsService: GenericsService,
    private renderer: Renderer2,
    private el: ElementRef,
    private apiLaravelService: ApiLaravelService,
    private mobilesectionService: MobileSectionService
  ) {
    this.recover();
  }

  ngOnInit() {
    this.subscribeToSelectedItem();
    this.recover();
    this.loadTableJS();
  }
  subscribeToSelectedItem() {
    this.subscription = this.mobilesectionService.selectedItem$.subscribe(
      (item) => {
        this.selectedItem = item;
        this.recover();
      }
    );
  }
  recover() {
    if (this.selectedItem === "Entradas") {
      this.apiLaravelService.getLogsFiltered().subscribe((data: any[]) => {
        this.data = data.filter((item) => !item.date_entry_confirmed);
      });
    } else if (this.selectedItem === "Salidas") {
      this.apiLaravelService.getLogsFiltered().subscribe((data: any[]) => {
        this.data = data.filter((item) => !item.date_exit_confirmed);
      });
    } else {
      this.apiLaravelService.getLogsFiltered().subscribe((data: any[]) => {
        this.data = data;
      });
    }
  }

  loadTableJS() {
    const script = this.renderer.createElement("script");
    script.type = "text/javascript";
    script.src = "./assets/javascript/table.js";
    script.defer = true;
    this.renderer.appendChild(this.el.nativeElement, script);
  }
}
