import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private http: HttpClient, private route: Router) { }
  
  home(){
    this.route.navigateByUrl("/");
  }

  login(){
    this.route.navigateByUrl("/login");
  }

  register(){
    this.route.navigateByUrl("/register");
  }

  profile(){
    this.route.navigateByUrl("/profile");
  }

  mappage(){
    this.route.navigateByUrl("/mappage");
  }
}
