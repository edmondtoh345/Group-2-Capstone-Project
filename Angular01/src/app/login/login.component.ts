import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { RouterService } from '../service/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private service: RouterService, private authservice: AuthenticationService, private route: Router) { }

  loginForm = this.fb.group({ 
    email: new FormControl(''), 
    password: new FormControl('') 
  }) 
 
  loginSubmit(){ 

    this.authservice.login(this.loginForm.value).subscribe((data: any)=>{ 
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('useremail', data.userData.email);
      this.authservice.usernameSubject.next(data.userData.firstname); 
      this.authservice.isLoggedInSubject.next(true); 
      alert('Welcome Back! Favorites and Profile page are now accessible.');
      this.route.navigateByUrl('/'); 
    }) 
  }

  get email() { return this.loginForm.get('email') };
  get password() { return this.loginForm.get('password') };
}

