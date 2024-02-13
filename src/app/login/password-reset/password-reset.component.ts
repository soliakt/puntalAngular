import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { RefreshService } from "../../services/refresh/refresh.service";

@Component({
  selector: "app-password-reset",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./password-reset.component.html",
  styleUrl: "./password-reset.component.css",
})
export class PasswordResetComponent {
  newPasswordValue1: string = "";
  newPasswordValue2: string = "";
  constructor(private router: Router, private refreshService: RefreshService) {}
  reset__password() {}
}
