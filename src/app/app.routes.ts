import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login/login.component";
import { AduanaComponent } from "./users/aduana/aduana.component";
import { GuardamuelleComponent } from "./users/guardamuelle/guardamuelle.component";
import { PasswordRecoveryComponent } from "./login/password-recovery/password-recovery.component";
import { PasswordResetComponent } from "./login/password-reset/password-reset.component";
import { aduanaGuard } from "./guards/aduana.guard";
import { guardamuellesGuard } from "./guards/guardamuelles.guard";

export const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "password-recovery",
    component: PasswordRecoveryComponent,
  },
  {
    path: "password-reset",
    component: PasswordResetComponent,
  },
  {
    path: "aduana",
    component: AduanaComponent,
    canActivate: [aduanaGuard],
  },
  {
    path: "guardamuelle",
    component: GuardamuelleComponent,
    canActivate: [guardamuellesGuard],
  },
];
