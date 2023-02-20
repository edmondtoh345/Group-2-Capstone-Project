import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  public usernameSubject = new BehaviorSubject('Guest');
  public isLoggedInSubject = new BehaviorSubject(false);

  register(user: any) {
    return this.http.post(`${environment.authUrl}/register`, user);
  }

  login(credentials: any){
    return this.http.post(`${environment.authUrl}/login`, credentials);
  }

  isUserAuthenticated(){
    return this.http.post(`${environment.authUrl}/isAuthenticated`, null, {
      headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
}
