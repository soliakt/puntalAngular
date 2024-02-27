import { CanActivateFn } from "@angular/router";

export const aduanaGuard: CanActivateFn = (route, state) => {
  //Comprueba si hay alguna variable definida en localStorage e intenta obtener el valor de employeeRole
  if (
    typeof localStorage !== "undefined" &&
    localStorage.getItem("employeeRole")
  ) {
    //Si employeeRole es Aduanas el usuario puede acceder a las rutas de Aduanas
    if (localStorage.getItem("employeeRole") == "Aduanas") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
