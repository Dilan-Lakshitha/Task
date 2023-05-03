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
  SigninForm!: FormGroup;
  inputData!:string;
  formData:any={};

  constructor(private authservice: AuthServiceService,
              private router: Router) {

  }
  ngOnInit(): void {
    this.SigninForm=new FormGroup({
      email:new FormGroup('',[Validators.required,Validators.email]),
      password:new FormGroup('',[Validators.required,Validators.minLength(6)]),
      address1:new FormGroup(''),
      address2:new FormGroup(''),
      city:new FormGroup(''),
      state:new FormGroup(''),
      zip: new FormGroup('')
    })
  }

  signIn() {
    const formData=this.SigninForm.value();
    this.router.navigate(['./home']);
    this.authservice.sendData(formData).subscribe(
      response=>console.log(response),
      err=>console.error(err)
    )
  }
}
