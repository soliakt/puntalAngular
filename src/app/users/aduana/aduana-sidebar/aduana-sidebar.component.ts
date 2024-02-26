import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-aduana-sidebar",
  standalone: true,
  imports: [],
  templateUrl: "./aduana-sidebar.component.html",
  styleUrl: "./aduana-sidebar.component.css",
})
export class AduanaSidebarComponent implements OnInit {
  username: string = "";
  ngOnInit(): void {
    if (localStorage.getItem("loginToken")) {
      this.username = localStorage.getItem("employeeName") || "";
    }
  }
  signOut() {
    localStorage.clear();
  }
}
