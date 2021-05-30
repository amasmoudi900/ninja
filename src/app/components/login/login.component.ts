import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  user:any={};
  msgError:string;
  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:[''],
      pwd:['']
    });
  }

  login(){
    console.log('Here my user',this.user);
    this.userService.login(this.user).subscribe(
      (data)=> {
        console.log('Here data from login', data);
        if (data.message == "2") {
          if (data.user.role =='admin') {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['']);
          }
        } else {
          this.msgError = 'Please check your email/pwd';
        }
      }
    );
  }

}
