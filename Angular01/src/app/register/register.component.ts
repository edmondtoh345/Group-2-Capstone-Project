import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { RouterService } from '../service/router.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private service: RouterService, private authservice: AuthenticationService, private route: Router, private _MatDatePicker: MatDatepickerModule, private fb: FormBuilder) { } 
  userForm = this.fb.group({
    firstName: new FormControl ('', Validators.required),
    lastName: new FormControl ('', Validators.required),
    email:  new FormControl ('', Validators.required),
    password:  new FormControl ('', Validators.required),
    phoneNumber:  new FormControl ('', Validators.required),
    gender:  new FormControl ('', Validators.required),
    dob:  new FormControl ('', Validators.required),
  })
  creditForm = this.fb.group({
    ccNumber:  new FormControl ('', Validators.required),
    ccName:  new FormControl ('', Validators.required),
    ccExpiry: new FormControl ('', Validators.required),
  })

}