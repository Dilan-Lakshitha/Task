import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {

  }

  loginClick() {
    this.router.navigate(['./home']);
  }

  signupClick(){
    this.router.navigate(['./sign-up']);
  }
}
