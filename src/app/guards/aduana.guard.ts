import { CanActivateFn } from "@angular/router";

export const aduanaGuard: CanActivateFn = (route, state) => {
  if (
    typeof localStorage !== "undefined" &&
    localStorage.getItem("employeeRole")
  ) {
    if (localStorage.getItem("employeeRole") == "Aduanas") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
