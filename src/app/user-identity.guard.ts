import {
  Callback,
  LoggedInCallback,
  CognitoUtil
} from './services/cognito.service';
import { UserParametersService } from './services/user-parameters.service';
import { UserLoginService } from './services/user-login.service';
import { IdentityManagementService } from './services/identity-management.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { read } from 'fs';
import { CognitoUserSession } from 'amazon-cognito-identity-js';
// import { CognitoIdentityCredentials, config as AWSConfig, AWSError } from 'aws-sdk';

@Injectable({ providedIn: 'root' })
export class UserIdentityGuard implements CanActivate {

  configStatus: boolean;

  constructor(
    private cognitoUtil: CognitoUtil,
    public userParams: UserParametersService,
    private router: Router,
    private userService: UserLoginService,
    private identityManagementService: IdentityManagementService,
    private route: ActivatedRoute
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggedIn = this.isAuthenticated();
    const isUser = this.getCurrentUser();
    // console.log(isUser);
    let accessUrl = state.url;
    accessUrl = accessUrl.replace('/', '');
    // console.log(state);
    if ( isUser) {
      if ( this.identityManagementService.isAccessConfigLoaded() === true ) {
        // console.log('Access available' + state.url);
        return this.identityManagementService.isHavingAccess(accessUrl);
      } else {
        // console.log('Assign access' + state.url);
        const currentObject = this;
        this.identityManagementService.loadAccessConfiguration().then( config => {
          const isAccessible = currentObject.identityManagementService.isHavingAccess(accessUrl);
          if ( isAccessible === true ) {
            this.router.navigate([ '/' + accessUrl ]);
          }
        });
      }
      // console.log('access to' + state.url);
    } else {
      // console.log('Without access' + state.url);
      // console.log( 'Cognito User value is' + this.cognitoUtil.getCurrentUser());
      this.router.navigate([ '/login'  ]);
    }

    // return isLoggedIn;
  }

  isAuthenticated(): boolean {
    let isAuthenticated = false;

    const cognitoUser = this.cognitoUtil.getCurrentUser();

    if (cognitoUser != null) {
      // isAuthenticated = true;
        cognitoUser.getSession(function (err, session) {
            if (err) {
                // console.log('User : Couldn\'t get the session: ' + err, err.stack);
                isAuthenticated = false;
            } else {
                // console.log('User : Session is ' + session.isValid());
                isAuthenticated = session.isValid();
            }
        });
    } else {
        // console.log('UserLoginService: can\'t retrieve the current user');
        this.router.navigate(['/login']);
        isAuthenticated = false;
    }

    return isAuthenticated;
  }

  getCurrentUser() {
    const userPool = this.cognitoUtil.getUserPool();
    // const cognitoUser = userPool.getCurrentUser();
    let hasSession: boolean;
    const cognitoUser = userPool.getCurrentUser();
    if (cognitoUser) {

        cognitoUser.getSession((err: Error, session: CognitoUserSession) => {

          // console.log(session);
            if (session && session.isValid()) {
                if (!session.getIdToken().getJwtToken()) {
                  // console.log('without' + session.getIdToken().getJwtToken());
                  // console.log('without');
                  hasSession = false;
                } else {
                  hasSession = true;
                  // console.log(session.getRefreshToken());
                }
            }
        });

    }
    // console.log(userPool.getCurrentUser());
    return hasSession;
  }

}
