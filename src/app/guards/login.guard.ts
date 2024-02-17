import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (
    typeof localStorage !== "undefined" &&
    localStorage.getItem("loginToken")
  ) {
    if (localStorage.getItem("employeeRole") == "Aduanas") {
      router.navigate(["/aduana"]);
      return false;
    }
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
