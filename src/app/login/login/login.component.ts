import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";

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
  credentialError: boolean = false;
  statusError: boolean = false;
  rememberEmail: boolean = false;
  onCheck(event) {
    if (event.target.checked) {
      this.rememberEmail = true;
    }
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {
    this.loginObj = new Login();
    this.loadEmailFromCookie();
  }
  check__login() {
    this.http
      .post("http://127.0.0.1:8000/api/employee/login", this.loginObj)
      .subscribe(
        (res: any) => {
          console.log(res.rolename);
          if (this.rememberEmail == true) {
            console.log(res.email);
            this.cookieService.set("Email", res.email);
          }
          if (res.status !== "Inactivo") {
            localStorage.setItem("loginToken", res.data.token);
            localStorage.setItem("employeeRole", res.rolename);
            localStorage.setItem("employeeName", res.name);

            if (res.rolename == "Aduanas") {
              this.router.navigateByUrl("/aduana");
            }

            if (res.rolename == "Guardamuelles") {
              this.router.navigateByUrl("/guardamuelle");
            }
          } else {
            this.statusError = true;
          }
        },
        (error) => {
          this.credentialError = true;
        }
      );
  }
  loadEmailFromCookie() {
    const storedEmail = this.cookieService.get("Email");
    if (storedEmail) {
      this.loginObj.email = storedEmail;
    }
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
