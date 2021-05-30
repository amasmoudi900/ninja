import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamURL:string = 'http://localhost:3000';
  constructor(private httpClient:HttpClient) { }

  addTeam(team:any){
    return this.httpClient.post(`${this.teamURL}/addTeam`, team);
  }
}
