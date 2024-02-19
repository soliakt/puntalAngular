import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-profile',
  standalone: true,
  imports: [],
  templateUrl: './mobile-profile.component.html',
  styleUrl: './mobile-profile.component.css'
})
export class MobileProfileComponent {
  roleName = localStorage.getItem("employeeRole");
  employeeName = localStorage.getItem("employeeName");
}
