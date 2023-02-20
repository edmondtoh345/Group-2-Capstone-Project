import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private fb: FormBuilder, private service: DataService) {}
  userForm = this.fb.group({
    firstName: new FormControl (''),
    lastName: new FormControl (''),
    email:  new FormControl (''),
    password:  new FormControl (''),
    phoneNumber:  new FormControl (''),
    gender:  new FormControl (''),
    dob:  new FormControl (''),
  })
  creditForm = this.fb.group({
    ccNumber:  new FormControl (''),
    ccName:  new FormControl (''),
    ccExpiry: new FormControl (''),
  })
}
