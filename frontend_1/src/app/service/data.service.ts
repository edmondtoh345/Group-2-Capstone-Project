import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../Environment/environment';
import Registration from '../Model/model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

//not sure if this works cause the email will appear in the URL? Cannot use id; not in model

  GetProfile(Email:any){
    return this.http.get(`${environment.authUrl}/${Email}`);
  }

  UpdateProfile(Email:any,updateprofile:Registration){
    return this.http.put(`${environment.apiUrl}/${Email}`,updateprofile);
  }
}
