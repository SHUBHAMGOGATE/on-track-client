import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { UserData } from '../../providers/user-data';
import { UserOptions } from '../../interfaces/user-options';
import { FirebaseService } from '../../firebase.service';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;
  errorMessage: '';
  isValid = false;

  constructor(
    public userData: UserData,
    public router: Router,
    public authService : FirebaseService,
    public storage : Storage
  ) {
  }
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
  onLogin(form: NgForm) {
    this.submitted = true;
  
    if (form.valid) {
      this.userData.login(this.login.username,this.login.password);
      this.router.navigateByUrl('/app/tabs/schedule');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
  
  tryGoogleLogin() {
    this.authService.doGoogleLogin()
    .then(res => {
      console.log(res);
      this.storage.set(this.HAS_LOGGED_IN, true);
      this.userData.setUsername(res.user.email);
      this.userData.events.publish('user:login');
      this.router.navigateByUrl('/app/tabs/schedule');
    });
  }

  tryLogin(value) {
    console.log(value);
    this.authService.doLogin(value.username,value.password)
    .then(res => {
      this.userData.login(this.login.username,this.login.password);
      this.router.navigateByUrl('/app/tabs/schedule');
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    });
  }
}
