import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IdentityManagementService } from './services/identity-management.service';

@Injectable({ providedIn: 'root' })
export class AccessResolver implements Resolve<any> {

    constructor(private identityManagementService: IdentityManagementService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Promise<any> | boolean {
        return this.identityManagementService.loadAccessConfiguration().then(response => {
            return response;
        });
    }

}
