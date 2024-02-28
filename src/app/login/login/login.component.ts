import { Component, ElementRef, inject } from "@angular/core";
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
  passwordFieldType: string = "password";

  //Función para mostrar la contraseña
  showPassword(event: Event) {
    event.preventDefault();
    this.passwordFieldType =
      this.passwordFieldType === "password" ? "text" : "password";
  }

  //Listener para comprobar si el checkbox de redordar contraseña está marcado
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

  //Función para comprobar las credenciales introducidas con la api
  check__login() {
    this.http
      .post("http://18.201.17.130/api/employee/login", this.loginObj)
      .subscribe(
        (res: any) => {
          //Si comprobar email está marcado almacena una cookie con este
          if (this.rememberEmail == true) {
            this.cookieService.set("Email", res.email);
          }

          //Si el usuario no está inactivo y este posee el rol de Aduanas o Guardamuelles se almacena un token de login y 2 con datos de usuarios
          if (res.status !== "Inactivo") {
            if (res.rolename == "Aduanas") {
              localStorage.setItem("loginToken", res.data.token);
              localStorage.setItem("employeeRole", res.rolename);
              localStorage.setItem("employeeName", res.name);
              this.router.navigateByUrl("/aduana");
            }

            if (res.rolename == "Guardamuelles") {
              localStorage.setItem("loginToken", res.data.token);
              localStorage.setItem("employeeRole", res.rolename);
              localStorage.setItem("employeeName", res.name);
              this.router.navigateByUrl("/guardamuelle");
            }
          }
          //Si las credenciales son correctas, pero el usuario está inactivo sacará un error para informar al usuario de que está inactivo
          else {
            this.statusError = true;
          }
        },
        //Si las credenciales son incorrectas sacará un error de autenticación por pantalla
        (error) => {
          this.credentialError = true;
        }
      );
  }

  //Función para cargar la cookie en el input de email si esta está creada
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
