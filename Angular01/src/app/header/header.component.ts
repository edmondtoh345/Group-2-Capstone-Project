import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { RouterService } from '../service/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private service: RouterService, private authservice: AuthenticationService, private route: Router) { } 

  public username: string = ''; 
  public isLoggedIn: boolean = false; 
  ngOnInit() { 
    this.authservice.usernameSubject.subscribe((data: any) => this.username = data); 
    this.authservice.isLoggedInSubject.subscribe((data: any) => this.isLoggedIn = data); 
  } 
 
  onLogout(){ 
    localStorage.clear(); 
    this.route.navigateByUrl('/'); 
    this.authservice.isLoggedInSubject.next(false); 
  }
}
