import { TeamService } from './../../services/team.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  addTeamForm:FormGroup;
  team:any={};
  constructor(
    private formBuilder:FormBuilder,
    private teamService:TeamService) { }

  ngOnInit() {
    this.addTeamForm = this.formBuilder.group({
      name:[''],
      foundation:[''],
      stadium:[''],
      country:['']
    })
  } 

  addTeam(){
    console.log('Here my team object', this.team);
    this.teamService.addTeam(this.team).subscribe(
    );
  }

  calcul(a:number, b:number){
    return a+b;
  }



}
