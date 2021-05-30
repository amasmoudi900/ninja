import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL = 'http://localhost:3000';
  constructor(private httpClient:HttpClient) { }
  
  // add user to DB
  signup(user:any){
    return this.httpClient.post<{message:string}>(`${this.userURL}/signup`, user);
  }

  login(user:any){
    return this.httpClient.post<{message:string, user:any}>(`${this.userURL}/login`, user);
  }
}
