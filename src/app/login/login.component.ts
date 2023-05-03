import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;

  constructor(private authservice:AuthServiceService, 
              private router:Router) {

  }
  ngOnInit(): void {
    this.loginForm =new FormGroup({
      email:new FormGroup('',[Validators.required]),
      password:new FormGroup('',[Validators.required])
    })
  }

  // loginClick() {
  //   this.router.navigate(['./home']);
  // }

  signupClick(){
    this.router.navigate(['./sign-up']);
  }
  loginProcess(){
    this.router.navigate(['./home']);

    if(this.loginForm.valid){
      this.authservice.login(this.loginForm.value).subscribe(result=>{
        if(result.success){
          console.log(result);
          alert(result.message);
        }
      })
    }
  }
}
