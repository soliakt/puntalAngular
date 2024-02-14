import { CanActivateFn } from "@angular/router";

export const guardamuellesGuard: CanActivateFn = (route, state) => {
  let role = localStorage.getItem("employeeRole");
  if (role == "Guardamuelles") {
    return true;
  } else {
    return false;
  }
};
