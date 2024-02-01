import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Generic } from '../../interfaces/generic';
import { GenericsService } from '../../services/generics/generics.service';

@Component({
  selector: 'app-mobile-table',
  standalone: true,
  imports: [],
  templateUrl: './mobile-table.component.html',
  styleUrl: './mobile-table.component.css'
})
export class MobileTableComponent implements OnInit{
    generics: Generic[]=[];

    constructor(private genericsService: GenericsService, private renderer: Renderer2, private el: ElementRef){}

    ngOnInit(){
      this.recover();
    }
    
    ngAfterViewInit(){
      this.loadTableJS();
    }

    recover(){
      this.genericsService.returnService().subscribe((generics: Generic[]) => {
        this.generics = generics;
        this.loadTableJS();
      });
    }

    loadTableJS(){
      const script = this.renderer.createElement('script');
      script.type = 'text/javascript';
      script.src = './assets/javascript/table.js';
      script.defer = true;
      this.renderer.appendChild(this.el.nativeElement, script);
    }
}
