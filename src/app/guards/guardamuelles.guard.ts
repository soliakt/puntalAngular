import { CanActivateFn } from "@angular/router";

export const guardamuellesGuard: CanActivateFn = (route, state) => {
  if (
    typeof localStorage !== "undefined" &&
    localStorage.getItem("employeeRole")
  ) {
    if (localStorage.getItem("employeeRole") == "Guardamuelles") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
