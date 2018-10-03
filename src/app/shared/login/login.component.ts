import { Component, OnInit } from '@angular/core';
import {
  CognitoCallback,
  LoggedInCallback,
  Callback
} from '../../services/cognito.service';
import { UserLoginService } from '../../services/user-login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserParametersService } from '../../services/user-parameters.service';
import { IdentityManagementService, VerficationCallBack } from '../../services/identity-management.service';
import { CognitoUtil } from '../../services/cognito.service';
import { environment } from '../../../environments/environment';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
  implements Callback, CognitoCallback, LoggedInCallback, VerficationCallBack, OnInit {
  test: Date = new Date();
  email: string;
  password: string;
  errorMessage: string;
  isProduction = environment.production;
  configStatus: boolean;

  constructor(
    private cognitoUtil: CognitoUtil,
    private userService: UserLoginService,
    public userParams: UserParametersService,
    private identityManagementService: IdentityManagementService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.errorMessage = null;
    // console.log(
    //   'Checking if the user is already authenticated. If so, then redirect to the secure site'
    // );
    this.route.data
    .subscribe((data: { configStatus: boolean }) => {
      this.configStatus = data.configStatus;
      this.userService.isAuthenticated(this);
    });
    // this.userService.isAuthenticated(this);
  }

  verificationCallBack(message: string, result: any): void {
    if ( message === 'true' ) {
     // window.location.reload();
      this.router.navigate(['/overview']);
    } else {
      this.notifyMsg(message, 'danger');
      $('#loginbtn').val('Sign in');
    }
  }

  isLoggedIn(message: string, isLoggedIn: boolean): void {
    if (isLoggedIn) {
      this.userParams.getParameters(this);
      const loginUserName = this.cognitoUtil.getCurrentUser().getUsername();
      const isHavingAppAccess: boolean = this.identityManagementService.isHavingAccess(loginUserName);
    }
  }

  callback(): void {
    console.log('this function is not implemented yet');
  }

  callbackWithParam(result: any): void {
    console.log(
      'received parameters from the call back event. printing the same in the next line'
    );
    console.log(result);
  }

  cognitoCallback(message: string, result: any): void {
    console.log(message);
    console.log(result);
    if (message != null) {
      this.notifyMsg(message, 'danger');
      // console.log('result: ' + this.errorMessage);
      if (this.errorMessage === 'User is not confirmed.') {
        // console.log('redirecting');
      } else if (this.errorMessage === 'User needs to set password.') {
        // console.log('redirecting to set new password');
      }
      $('#loginbtn').val('Sign in');
    } else {
      // success
      const loginUserName = this.cognitoUtil.getCurrentUser().getUsername();
      this.identityManagementService.checkApplicationAccess(loginUserName, this);
      // console.log(loginUserName + '==>' + this.identityManagementService.checkApplicationAccess(loginUserName, this));
    }
  }

  keyDownFunction(event) {
    if (event.keyCode === 13) {
    }
  }

  onLogin() {
    $('#loginbtn').val('Loading...');
    if (this.email == null || this.password == null) {
      // this.errorMessage = 'All fields are required';
      this.notifyMsg('All fields are required', 'danger');
      $('#loginbtn').val('Sign in');
      return;
    }
    this.errorMessage = null;
    this.userService.authenticate(this.email, this.password, this);
  }

  notifyMsg(msg, type) {
    $.notify(
      {
        icon: '',
        message: msg
      },
      {
        type: type,
        timer: 10,
        placement: {
          from: 'top',
          align: 'center'
        }
      }
    );
  }
}
