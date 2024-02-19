import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login/login.component";
import { AduanaComponent } from "./users/aduana/aduana.component";
import { GuardamuelleComponent } from "./users/guardamuelle/guardamuelle.component";
import { PasswordRecoveryComponent } from "./login/password-recovery/password-recovery.component";
import { PasswordResetComponent } from "./login/password-reset/password-reset.component";
import { aduanaGuard } from "./guards/aduana.guard";
import { guardamuellesGuard } from "./guards/guardamuelles.guard";
import { loginGuard } from "./guards/login.guard";
import { MobileTableModule } from "./components/mobile-table/mobile-table.module";
import { MobileFormComponent } from "./components/mobile-form/mobile-form.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [loginGuard],
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
    children: [
      { path: '', component: MobileTableModule },
      { path: 'mobile-form', component: MobileFormComponent }
    ]
  },
  {
    path: "**",
    redirectTo: "login",
  },
];
