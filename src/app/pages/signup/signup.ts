import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';
import { UserOptions } from '../../interfaces/user-options';
import { FirebaseAuth } from 'angularfire2';
import { FirebaseService } from '../../firebase.service';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  signup: UserOptions = { username: '', password: '' };
  submitted = false;
  errorMessage = '';
  successMessage = '';
  constructor(
    public router: Router,
    public userData: UserData,
    public authService : FirebaseService
  ) {}

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username,this.signup.password);
      this.router.navigateByUrl('/app/tabs/schedule');
    }
  }

  tryRegister(value) {
    console.log(value);
    this.authService.doRegister(value.username,value.password)
    .then(res => {
      console.log(res);
      this.errorMessage = '';
      this.successMessage = 'Your account has been created';
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = '';
    });
  }
}
