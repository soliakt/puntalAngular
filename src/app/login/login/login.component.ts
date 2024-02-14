import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { RefreshService } from "../../services/refresh/refresh.service";

@Component({
  selector: "app-login",
  standalone: true,
  template: "",
  imports: [FormsModule, HttpClientModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  loginObj: Login;

  constructor(private http: HttpClient, private router: Router) {
    this.loginObj = new Login();
  }
  check__login() {
    this.http
      .post("http://127.0.0.1:8000/api/employee/login", this.loginObj)
      .subscribe((res: any) => {
        if (res.result) {
          console.log(res.rolename.role);

          if (res.rolename.role == "Concesionario") {
            return console.log(
              "Te estás intentando loguear como Concesionario"
            );
          }

          if (res.rolename.role == "Administrativo") {
            return console.log(
              "Te estás intentando loguear como Administrativo"
            );
          }

          if (res.rolename.role == "Aduanas") {
            localStorage.setItem("loginToken", res.data.token);
            this.router.navigateByUrl("/aduana");
          }

          if (res.rolename.role == "Guardamuelles") {
            localStorage.setItem("loginToken", res.data.token);
            this.router.navigateByUrl("/guardamuelles");
          }
        } else {
          console.log(res.message);
        }
      });
  }
}

export class Login {
  email: string;
  password: string;
  constructor() {
    this.email = "";
    this.password = "";
  }
}