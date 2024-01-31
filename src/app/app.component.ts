import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { RefreshService } from './services/refresh/refresh.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent, NavbarComponent, SidebarComponent, TableComponent, FormComponent],
  templateUrl: './app.component.html',
  providers:[RefreshService],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title='prueba';


    
}