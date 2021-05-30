import { MatchesComponent } from './components/matches/matches.component';
import { SearchComponent } from './components/search/search.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'signupAdmin', component:SignupComponent},
  {path: 'matches', component:MatchesComponent},
  {path: 'addMatch', component:AddMatchComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'match-info/:id', component:MatchInfoComponent},
  {path: 'edit-match/:id', component:AddMatchComponent},
  {path: 'addTeam', component: AddTeamComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
