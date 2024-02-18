import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-aduana-navbar",
  standalone: true,
  imports: [],
  templateUrl: "./aduana-navbar.component.html",
  styleUrl: "./aduana-navbar.component.css",
})
export class AduanaNavbarComponent implements OnInit {
  letter: string = "";
  username: string = "";
  role: string = "";

  ngOnInit(): void {
    if (localStorage.getItem("loginToken")) {
      this.username = localStorage.getItem("employeeName") || "";
      console.log(this.username);
      console.log(localStorage.getItem("employeeName"));
      this.role = localStorage.getItem("employeeRole") || "";
      console.log(localStorage.getItem("employeeRole"));
      this.letter = localStorage.getItem("employeeName")?.slice(0, 1) || "";
    }
  }
}
