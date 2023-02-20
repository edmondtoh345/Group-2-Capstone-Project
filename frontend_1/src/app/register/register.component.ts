import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Router } from '@angular/router';
import Registration from '../Model/model';
import { AuthenticationService } from '../service/authentication.service';
import { RouterService } from '../service/router.service';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private service: RouterService, private authservice: AuthenticationService, private route: Router, private _MatDatePicker: MatDatepickerModule, private fb:FormBuilder, private _MatRadio:MatRadioModule) { } 

  NgOnInit(){
    this.regForm.reset();
  }

  public regCard: Registration = {};
  public regCards: Array<any> =[];
  regForm = this.fb.group({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    dateofbirth: new FormControl('', Validators.required),
  });

  OnReg(){
    this.authservice.register(this.regForm.value).subscribe((regis:any)=>{
      this.regForm.reset();
      alert('Registration successful!');
      this.route.navigateByUrl('/login'); 
    });
  }

  get firstname() { return this.regForm.get('firstname') };
  get lastname() { return this.regForm.get('lastname') };
  get email() { return this.regForm.get('email') };
  get password() { return this.regForm.get('password') };
  get phone() { return this.regForm.get('phone') };
  get gender() { return this.regForm.get('gender') };
  get dateofbirth() { return this.regForm.get('dateofbirth') };

}

