import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aduanas-sidebar',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './aduanas-sidebar.component.html',
  styleUrl: './aduanas-sidebar.component.css',
})
export class AduanasSidebarComponent {}
