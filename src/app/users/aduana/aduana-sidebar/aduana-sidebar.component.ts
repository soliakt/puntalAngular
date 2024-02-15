import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-aduana-sidebar",
  standalone: true,
  imports: [],
  templateUrl: "./aduana-sidebar.component.html",
  styleUrl: "./aduana-sidebar.component.css",
})
export class AduanaSidebarComponent {
  signOut() {
    localStorage.clear();
  }
}
