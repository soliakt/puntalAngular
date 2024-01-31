import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AduanasNavbarComponent } from './aduanas-navbar/aduanas-navbar.component';
import { AduanasSidebarComponent } from './aduanas-sidebar/aduanas-sidebar.component';
import { AduanasTableComponent } from './aduanas-table/aduanas-table.component';

@Component({
  selector: 'app-aduanas',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AduanasNavbarComponent,
    AduanasSidebarComponent,
    AduanasTableComponent,
  ],
  templateUrl: './aduanas.component.html',
  styleUrl: './aduanas.component.css',
})
export class AduanasComponent {}
