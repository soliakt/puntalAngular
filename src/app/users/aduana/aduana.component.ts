import { Component, OnInit } from '@angular/core';
import { AduanaNavbarComponent } from './aduana-navbar/aduana-navbar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RefreshService } from '../../services/refresh/refresh.service';
import { AduanaSidebarComponent } from './aduana-sidebar/aduana-sidebar.component';
import { AduanaTableComponent } from './aduana-table/aduana-table.component';

@Component({
  selector: 'app-aduana',
  standalone: true,
  imports: [
    AduanaNavbarComponent,
    AduanaSidebarComponent,
    AduanaTableComponent,
  ],
  templateUrl: './aduana.component.html',
  styleUrl: './aduana.component.css',
})
export class AduanaComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private refreshService: RefreshService
  ) {}

  ngOnInit(): void {
    if (this.refreshService.get__source() === 'login') {
      this.refreshService.set__source('');
      location.reload();
    }
  }
}
