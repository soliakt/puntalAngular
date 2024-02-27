import { CanActivateFn } from "@angular/router";

export const guardamuellesGuard: CanActivateFn = (route, state) => {
  //Comprueba si hay alguna variable definida en localStorage e intenta obtener el valor de employeeRole
  if (
    typeof localStorage !== "undefined" &&
    localStorage.getItem("employeeRole")
  ) {
    //Si employeeRole es Guardamuelles el usuario puede acceder a las rutas de Guardamuelles
    if (localStorage.getItem("employeeRole") == "Guardamuelles") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
