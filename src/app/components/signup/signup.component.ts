import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/validators/confirmPwd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  msg: string;
  signupForm: FormGroup;
  path: string;
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.path = this.router.url;
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.maxLength(15), Validators.required]],
      lastName: ['', [Validators.minLength(3), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      pwd: ['', Validators.minLength(5)],
      confirmPwd: ['']
    },
      {
        validator: MustMatch('pwd', 'confirmPwd')
      })
  }

  signup(obj: any) {
    if (this.path == "/signup") {
      obj.role = 'user';
    } else {
      obj.role = 'admin';
    }
    this.userService.signup(obj).subscribe(
      (data) => {
        if (data.message == '0') {
          this.msg = "Email exists";
        } else {
          this.router.navigate(['']);
        }
        console.log('Data after ', data.message);
      }
    );
  }

}
