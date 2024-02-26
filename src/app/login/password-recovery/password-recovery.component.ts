import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { RefreshService } from "../../services/refresh/refresh.service";

@Component({
  selector: "app-password-recovery",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./password-recovery.component.html",
  styleUrl: "./password-recovery.component.css",
})
export class PasswordRecoveryComponent {
  emailValue: string = "";
  constructor(private router: Router, private refreshService: RefreshService) {}
  check__email__registered() {}
}
