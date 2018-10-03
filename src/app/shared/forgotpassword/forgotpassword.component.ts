import { Component,  OnDestroy, OnInit } from '@angular/core';
import { CognitoCallback, LoggedInCallback, Callback } from '../../services/cognito.service';
import { UserLoginService } from '../../services/user-login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserParametersService } from '../../services/user-parameters.service';
import { IdentityManagementService, VerficationCallBack } from '../../services/identity-management.service';
import { CognitoUtil } from '../../services/cognito.service';
import { environment } from '../../../environments/environment';

declare var $: any;

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements Callback, CognitoCallback, LoggedInCallback, OnInit {

    test: Date = new Date();
    email: string;
    password: string;
    errorMessage: string;
    isProduction = environment.production;

    constructor(private userService: UserLoginService, public userParams: UserParametersService, private router: Router) { }

    ngOnInit() {
      this.errorMessage = null;
      console.log('Checking if the user is already authenticated. If so, then redirect to the secure site');
      this.userService.isAuthenticated(this);
    }

    isLoggedIn(message: string, isLoggedIn: boolean): void {
      if ( isLoggedIn ) {
        this.userParams.getParameters(this);
        this.router.navigate(['/overview']);
      }
    }

    callback(): void {
      console.log('this function is not implemented yet');
    }

    callbackWithParam(result: any): void {
      console.log('received parameters from the call back event. printing the same in the next line');
      console.log(result);
    }

    onNext() {
      $('#nextbtn').val('Loading...');
      if (this.email == null) {
          // this.errorMessage = 'All fields are required';
          this.notifyMsg('All fields are required' , 'danger');
          $('#nextbtn').val('Next');
          return;
      }
      this.errorMessage = null;
      this.userService.forgotPassword(this.email, this);
    }

    cognitoCallback(message: string, result: any) {
        if (message == null && result == null) { // error
            $('#nextbtn').val('Next');
            console.log(this.email);
            this.notifyMsg('Your Password Reset Code Sent to ' + this.email , 'success');
            this.router.navigate(['/forgotpassword', this.email]);
        } else { // success
            $('#nextbtn').val('Next');
            this.notifyMsg(message , 'danger');
           // this.errorMessage = message;
        }
    }

    notifyMsg(msg, type) {
      $.notify  ({
        icon: '',
        message: msg
      }, {
          type: type,
          timer: 10,
          placement: {
              from: 'top',
              align: 'center'
          }
      });
    }
}


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpasswordStep2.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotPassword2Component implements CognitoCallback, OnInit, OnDestroy {

  test: Date = new Date();
  verificationCode: string;
  email: string;
  password: string;
  errorMessage: string;
  private sub: any;
  myUrl: string;
  isProduction = environment.production;

  constructor(public router: Router, public route: ActivatedRoute,
              public userService: UserLoginService) {

    this.route.url.subscribe(
      (data: any) => {
          for (const i of data) {
              this.myUrl = i.path;
              this.email = i.path;
          } console.log(this.email);
        return this.myUrl;
      },
      (error: any) => console.log('URL ERROR', error));
      console.log('email from the url: ' + this.email);


  }

  ngOnInit() {
    console.log('heere');
    console.log(this.email);
      this.sub = this.route.params.subscribe(params => {
          this.email = params['email'];
          console.log('hii');
          console.log(this.email);
      });
      this.errorMessage = null;
  }

  ngOnDestroy() {
        // this.sub.unsubscribe();
  }

  onNext() {
    $('#nextbtn').val('Loading...');
    console.log('move next');
    console.log(this.email);
      this.errorMessage = null;
      this.userService.confirmNewPassword(this.email, this.verificationCode, this.password, this);
  }

  cognitoCallback(message: string) {
      if (message != null) { // error
         // this.errorMessage = message;
          this.notifyMsg(message , 'danger');
          $('#nextbtn').val('Reset Password');
          console.log('result: ' + this.errorMessage);
      } else { // success
          $('#nextbtn').val('Reset Password');
          this.notifyMsg('Your Password Updated Successfully!' , 'success');
          this.router.navigate(['/login']);
      }
  }

  notifyMsg(msg, type) {
    $.notify  ({
      icon: '',
      message: msg
    }, {
        type: type,
        timer: 500,
        placement: {
            from: 'top',
            align: 'center'
        }
    });
  }

}
