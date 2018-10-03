import { Subject } from 'rxjs';
import { Role } from 'aws-sdk/clients/codedeploy';
import { UiMenu } from '../user-management/ui-menu/ui-menu';
import { RoleAccess } from '../user-management/role-access/role-access';
import { RoleAccessService } from '../user-management/role-access/role-access.service';
import { UserListService } from '../user-management/user-list/user-list.service';
import { UiMenuService } from '../user-management/ui-menu/ui-menu.service';
import { NeoUser } from '../user-management/user-list/neo-user';
import { UtilityService } from './utility.service';
import { Injectable } from '@angular/core';

export interface VerficationCallBack {
  verificationCallBack(message: string, result: any): void;
}

@Injectable({ providedIn: 'root' })
export class IdentityManagementService {
  accessConfiguration: any;
  menuIDKeyValuepair: any;
  isConfigLoaded: boolean;

  configChange: Subject<boolean> = new Subject<boolean>();

  constructor(
    private userListService: UserListService,
    private uiMenuService: UiMenuService,
    private roleAccessService: RoleAccessService,
    private utilityService: UtilityService
  ) {
    // this.loadAccessConfiguration();
  }

  getMenuPath(menuID: string): string {
    let menuPath = '';

    // if ( ! this.menuIDKeyValuepair ) {
    //   this.menuIDKeyValuepair = JSON.parse(localStorage.getItem('menuIDKeyValuepair'));
    // }

    if ( this.menuIDKeyValuepair.hasOwnProperty(menuID) ) {
      menuPath = this.menuIDKeyValuepair[menuID];
    }
    return menuPath;
  }

  // isConfigLoaded(): boolean {
  //   let isLoggedIn = false;

  //   let accessConfiguration: any;

  //   if ( ! this.accessConfiguration ) {
  //     accessConfiguration = JSON.parse(localStorage.getItem('accessConfiguration'));
  //   }

  //   if ( accessConfiguration ) {
  //     isLoggedIn = true;
  //   }

  //   return isLoggedIn;
  // }

  isAccessConfigLoaded(): boolean {
    let isLoggedIn = false;

    if ( this.accessConfiguration && this.menuIDKeyValuepair ) {
      isLoggedIn = true;
    }

    return isLoggedIn;
  }

  isHavingAccess(accessPath: string): boolean {
    let isHavingAccess = false;

    // if ( ! this.accessConfiguration ) {
    //   this.accessConfiguration = JSON.parse(localStorage.getItem('accessConfiguration'));
    // }

    const userRole = localStorage.getItem('USER_ROLE');
    const accessList: string[] = this.accessConfiguration[userRole];
    if ( accessList.indexOf('*') !== -1 || accessList.indexOf(accessPath) !== -1 ) {
      isHavingAccess = true;
    }

    return isHavingAccess;
  }

  loadAccessConfiguration(): Promise<boolean> {

    const currentObject = this;

    return  new Promise((resolve, reject) => {

      if ( this.isAccessConfigLoaded() === true ) {
        resolve(true);
      } else {
        Promise.all([
          this.roleAccessService.getAllRoleAccesss(),
          this.uiMenuService.getAllUiMenus()
        ]).then(responses => {
          const roles: RoleAccess[] = responses[0];
          const uiMenus: UiMenu[] = responses[1];

          const menuKeyValuepair: Map<string, string> = new Map<string, string>();
          const rolesMap: any = {};

          this.menuIDKeyValuepair = {};

          uiMenus.forEach(uiMenu => {
            menuKeyValuepair.set(uiMenu.MENU_ID, uiMenu.UI_PATH);
            this.menuIDKeyValuepair[uiMenu.MENU_ID] = uiMenu.UI_PATH;
          });

          // localStorage.setItem('menuIDKeyValuepair', JSON.stringify(this.menuIDKeyValuepair));

          roles.forEach(role => {
            const roleAccess: string[] = this.utilityService.parseStringtoArray(role.ACCESS.toString());

            if ( roleAccess.length === 1 && roleAccess[0] === '*' ) {
              rolesMap[role.USER_ROLE] = roleAccess;
            } else {
              const roleAccessList: string[] = roleAccess;
              for (const i in roleAccessList) {
                if (roleAccessList.hasOwnProperty(i)) {
                  roleAccessList[i] = menuKeyValuepair.get(roleAccessList[i].trim());
                }
              }
              rolesMap[role.USER_ROLE] = roleAccessList;
            }
          });

          this.accessConfiguration = rolesMap;
          // localStorage.setItem('accessConfiguration', JSON.stringify(rolesMap));

          this.isConfigLoaded = true;
          currentObject.configChange.next(this.isConfigLoaded);

          resolve(true);
        }, error => {
          reject(false);
        });
      }
    });
  }

  checkApplicationAccess(
    userName: string,
    callBack: VerficationCallBack
  ): void {
    const filesFilter = {
      columnFilters: {
        USER_ID: {
          Operator: 'EQ',
          Values: [userName]
        }
      }
    };

    this.userListService.filterNeoUsers(filesFilter).then(users => {
      if (users.length === 1) {
        const userDetails = users[0];
        for (const key in userDetails) {
          if (userDetails.hasOwnProperty(key)) {
            localStorage.setItem(key, userDetails[key]);
          }
        }
        callBack.verificationCallBack('true', userDetails);
      } else if (users.length === 0) {
        callBack.verificationCallBack(
          'Please contact the Admin for the Site Access',
          null
        );
      }
    });
  }
}
