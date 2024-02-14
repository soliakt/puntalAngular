import { CanActivateFn } from "@angular/router";

export const aduanaGuard: CanActivateFn = (route, state) => {
  let role = localStorage.getItem("employeeRole");
  if (role == "Aduanas") {
    return true;
  } else {
    return false;
  }
};
