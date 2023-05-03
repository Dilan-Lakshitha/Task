import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  SigninForm!: FormGroup

  constructor(private authservice: AuthServiceService,
              private router: Router) {

  }
  ngOnInit(): void {
    this.SigninForm=new FormGroup({
      email:new FormGroup('',Validators.required),
      password:new FormGroup('',Validators.required)
    })
  }

  signIn() {
    this.router.navigate(['./home']);
  }

}
