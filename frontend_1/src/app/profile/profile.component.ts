import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import Registration from '../Model/model';
import { AuthenticationService } from '../service/authentication.service';
import { DataService } from '../service/data.service';
import { RouterService } from '../service/router.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private service: RouterService, private authservice: AuthenticationService, private route: Router, private _MatDatePicker: MatDatepickerModule, private fb:FormBuilder, private _MatRadio:MatRadioModule, private dservice: DataService, public dialog: MatDialog) { } 

  public proCards: Array<any> =[];
  public updateProfile: Registration = {};

  ngOnInit(Email:any){
    this.dservice.GetProfile(Email).subscribe((data:any)=> this.proCards = data);
  }

  GetProfile(Email: any) { 
    this.dservice.GetProfile(Email).subscribe(data => { 
      this.updateProfile = data; 
    }); 
  }

  EditProfile(Email: any) { 
    this.dservice.UpdateProfile(this.updateProfile.Email, this.updateProfile).subscribe((data:any) => {
    this.updateProfile = data
    let index = this.proCards.map((x)=> x.Email).indexOf(this.updateProfile.Email);
    this.proCards[index] = this.updateProfile
    }); 
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}