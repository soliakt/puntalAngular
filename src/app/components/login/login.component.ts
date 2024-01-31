import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RefreshService } from '../../services/refresh/refresh.service';

@Component({
  selector: 'app-login',
  standalone: true,
  template: '',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginValue: string = '';
  passwordValue: string = '';
  constructor(private router: Router, private refreshService: RefreshService) {

  }
  check__login(){
    if(this.loginValue=="aduana"){
      if(this.passwordValue=="aduana"){
        this.refreshService.set__source('login');
        this.router.navigate(['/aduana']);
      } else {
        alert("Credenciales incorrectas");
      }
    }else if(this.loginValue == "guardamuelle"){
      if(this.passwordValue == "guardamuelle"){
        this.router.navigate(['/guardamuelle']);
      } else{
        alert("Credenciales incorrectas");
      }
    } else {
      console.log("No login");
    }
  }

}

