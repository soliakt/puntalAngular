import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  //Comprueba si hay alguna variable definida en localStorage e intenta obtener el valor de loginToken
  if (
    typeof localStorage !== "undefined" &&
    localStorage.getItem("loginToken")
  ) {
    //Si la variable employeeRole es Aduanas el usuario es redirigido a Aduanas y no podrá acceder al login mientras el loginToken exista
    if (localStorage.getItem("employeeRole") == "Aduanas") {
      router.navigate(["/aduana"]);
      return false;
    }
    //Si la variable employeeRole es Guardamuelles el usuario es redirigido a Guardamuelles y no podrá acceder al login mientras el loginToken exista
    if (localStorage.getItem("employeeRole") == "Guardamuelles") {
      router.navigate(["/guardamuelle"]);
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
};
