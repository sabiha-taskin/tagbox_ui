import { environment } from './../../environments/environment';
import {Injectable} from '@angular/core';

import {
    AuthenticationDetails,
    CognitoIdentityServiceProvider,
    CognitoUser,
    CognitoUserAttribute,
    CognitoUserPool,
    CognitoUserSession
} from 'amazon-cognito-identity-js';
import * as AWS from 'aws-sdk/global';
import * as awsservice from 'aws-sdk/lib/service';
import * as CognitoIdentity from 'aws-sdk/clients/cognitoidentity';
import { CognitoIdentityCredentials, config as AWSConfig, AWSError } from 'aws-sdk';

export interface CognitoCallback {
    cognitoCallback(message: string, result: any): void;
}

export interface LoggedInCallback {
    isLoggedIn(message: string, loggedIn: boolean): void;
}

export interface Callback {
    callback(): void;
    callbackWithParam(result: any): void;
}

@Injectable({ providedIn: 'root' })
export class CognitoUtil {

    public static _REGION = environment.region;
    public static _IDENTITY_POOL_ID = environment.identityPoolId;
    public static _USER_POOL_ID = environment.userPoolId;
    public static _CLIENT_ID = environment.clientId;

    private static userPoolLoginKey =
    'cognito-idp.' + CognitoUtil._REGION.toLowerCase() + '.amazonaws.com/' + CognitoUtil._USER_POOL_ID;

    public static _POOL_DATA: any = {
        UserPoolId: CognitoUtil._USER_POOL_ID,
        ClientId: CognitoUtil._CLIENT_ID
    };
    cognitoAwsCredentials: CognitoIdentityCredentials;
    public cognitoCreds: AWS.CognitoIdentityCredentials;

    getUserPool() {
        if (environment.cognito_idp_endpoint) {
            CognitoUtil._POOL_DATA.endpoint = environment.cognito_idp_endpoint;
        }
        return new CognitoUserPool(CognitoUtil._POOL_DATA);
    }

    getCurrentUser() {
        const cognitoUser = this.getUserPool().getCurrentUser();
        if (cognitoUser) {

            cognitoUser.getSession((err: Error, session: CognitoUserSession) => {
                if (session && session.isValid()) {
                    if (!this.cognitoAwsCredentials || this.cognitoAwsCredentials.needsRefresh()) {
                       this.buildCognitoCreds(session.getIdToken().getJwtToken());
                    }
                }
            });

        }

        return this.getUserPool().getCurrentUser();
    }

    // AWS Stores Credentials in many ways, and with TypeScript this means that
    // getting the base credentials we authenticated with from the AWS globals gets really murky,
    // having to get around both class extension and unions. Therefore, we're going to give
    // developers direct access to the raw, unadulterated CognitoIdentityCredentials
    // object at all times.
    setCognitoCreds(creds: AWS.CognitoIdentityCredentials) {
        this.cognitoCreds = creds;
    }

    getCognitoCreds() {
        return this.cognitoCreds;
    }

    // This method takes in a raw jwtToken and uses the global AWS config options to build a
    // CognitoIdentityCredentials object and store it for us. It also returns the object to the caller
    // to avoid unnecessary calls to setCognitoCreds.

    buildCognitoCreds(idTokenJwt: string) {
        let url = 'cognito-idp.' + CognitoUtil._REGION.toLowerCase() + '.amazonaws.com/' + CognitoUtil._USER_POOL_ID;
        if (environment.cognito_idp_endpoint) {
            url = environment.cognito_idp_endpoint + '/' + CognitoUtil._USER_POOL_ID;
        }
        const logins: CognitoIdentity.LoginsMap = {};
        logins[url] = idTokenJwt;
        const params = {
            IdentityPoolId: CognitoUtil._IDENTITY_POOL_ID, /* required */
            Logins: logins
        };
        const serviceConfigs: awsservice.ServiceConfigurationOptions = {};
        if (environment.cognito_identity_endpoint) {
            serviceConfigs.endpoint = environment.cognito_identity_endpoint;
        }
        const creds = new AWS.CognitoIdentityCredentials(params, serviceConfigs);

        /* set AWS Region to config for s3 cognito file upload */
        const cognitoUser = this.getUserPool().getCurrentUser();

        const loginDetail = {};
        loginDetail[url] = idTokenJwt;
        this.cognitoAwsCredentials = new CognitoIdentityCredentials(
            {
                IdentityPoolId: CognitoUtil._IDENTITY_POOL_ID,
                Logins: loginDetail,
                LoginId: cognitoUser.getUsername()
            },
            {
                region: CognitoUtil._REGION.toLowerCase()
            }
        );
        // call refresh method in order to authenticate user and get new temp credentials
        // this.cognitoAwsCredentials.refresh((err: AWSError) => {
        //     if (err) {
        //         console.error(err);
        //     }
        // });
        AWSConfig.credentials = this.cognitoAwsCredentials;

        this.setCognitoCreds(creds);
        return creds;
    }


    getCognitoIdentity(): string {
        return this.cognitoCreds.identityId;
    }

    getAccessToken(callback: Callback): void {
        if (callback == null) {
            throw new Error('CognitoUtil: callback in getAccessToken is null...returning');
        }

        if (this.getCurrentUser() != null) {
            this.getCurrentUser().getSession(function (err, session) {
                if (err) {
                    // console.log('CognitoUtil: Cant set the credentials:' + err);
                    callback.callbackWithParam(null);
                } else {
                    if (session.isValid()) {
                        callback.callbackWithParam(session.getAccessToken().getJwtToken());
                    }
                }
            });
        } else {
            callback.callbackWithParam(null);
        }
    }

    getIdToken(callback: Callback): void {
        if (callback == null) {
            throw new Error('CognitoUtil: callback in getIdToken is null...returning');
        }
        if (this.getCurrentUser() != null) {
            this.getCurrentUser().getSession(function (err, session) {
                if (err) {
                    // console.log('CognitoUtil: Cant set the credentials:' + err);
                    callback.callbackWithParam(null);
                } else {
                    if (session.isValid()) {
                        callback.callbackWithParam(session.getIdToken().getJwtToken());
                    } else {
                        // console.log('CognitoUtil: Got the id token, but the session isnt valid');
                    }
                }
            });
        } else {
            callback.callbackWithParam(null);
        }
    }

    getAWSIDToken(): Promise<any> {
        const cognitoUser = this.getCurrentUser();

        const self = this;
        return  new Promise((resolve, reject) => {
            if (cognitoUser != null) {
                cognitoUser.getSession(function (err, session) {
                    // console.log(session);
                    if (err) {
                        // console.log('UserLoginService: Couldnt get the session: ' + err, err.stack);
                        resolve(false);
                    } else {
                        // console.log('UserLoginService: Session is ' + session.isValid());
                        const idToken = session.getIdToken().getJwtToken();
                        resolve(idToken);
                    }
                });
            } else {
                resolve(false);
            }
        });
    }

    getRefreshToken(callback: Callback): void {
        if (callback == null) {
            throw new Error('CognitoUtil: callback in getRefreshToken is null...returning');
        }
        if (this.getCurrentUser() != null) {
            this.getCurrentUser().getSession(function (err, session) {
                if (err) {
                    // console.log('CognitoUtil: Cant set the credentials:' + err);
                    callback.callbackWithParam(null);
                } else if (session.isValid()) {
                    callback.callbackWithParam(session.getRefreshToken());
                }
            });
        } else {
            callback.callbackWithParam(null);
        }
    }

    refresh(): void {
        this.getCurrentUser().getSession(function (err, session) {
            if (err) {
                // console.log('CognitoUtil: Cant set the credentials:' + err);
            } else {
                if (session.isValid()) {
                    // console.log('CognitoUtil: refreshed successfully');
                } else {
                    // console.log('CognitoUtil: refreshed but session is still not valid');
                }
            }
        });
    }
}
