import { UserLoginService } from './../services/user-login.service';
import { LoggedInCallback } from './../services/cognito.service';
import { environment } from './../../environments/environment';
import * as Ps from 'perfect-scrollbar';
import { IdentityManagementService } from '../services/identity-management.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';

import { SidebarService } from '../sidebar/sidebar.service';

declare var $: any;

export class RouteInfo {
  id: string;
  path: string;
  title: string;
  icon: string;
  class: string;
  isHeader: boolean;
  isProd: boolean;
  isExternalLink: boolean;
}

export const ROUTES: RouteInfo[] = [
  { id: 'Overview', path: 'overview', title: 'Overview', icon: 'ti-home', class: '', isHeader: false,
   isProd: false, isExternalLink: false },
  { id: 'Dashboard', path: 'dashboard', title: 'OPS Dashboard', icon: 'ti-panel', class: '', isHeader: false,
   isProd: false, isExternalLink: false },
  { id: 'Admin_Section', path: 'adminSection', title: 'Admin', icon: 'ti-user', class: '', isHeader: true,
   isProd: false, isExternalLink: false },
   { id: 'Transformation', path: 'transformation', title: 'Data Transformation', icon: 'ti-control-shuffle', class: '', isHeader: true,
   isProd: false, isExternalLink: false },
  { id: 'Report_Section', path: 'reportSection', title: 'Reports', icon: 'ti-agenda', class: '', isHeader: true,
  isProd: false, isExternalLink: false },
  { id: 'Catalog', path: 'catalog', title: 'Data', icon: 'ti-layout-grid3', class: '', isHeader: true,
  isProd: false, isExternalLink: false },
  { id: 'Energy_Monitoring', path: 'Dashboard', title: 'Energy Monitoring', icon: 'ti-signal', class: '', isHeader: true,
  isProd: environment.production, isExternalLink: false },
  { id: 'User_Management', path: 'UserManagement', title: 'User Management', icon: 'ti-agenda', class: '', isHeader: true,
  isProd: false, isExternalLink: false },
  { id: 'Folder_Management', path: 'foldermanagement', title: 'Folder Management', icon: 'ti-folder', class: '',
  isHeader: true, isProd: false, isExternalLink: false },
  { id: 'Smart_Procure', path: 'smart-procure', title: 'Smart Procure', icon: 'ti-stats-up', class: '', isHeader: false,
  isProd: false, isExternalLink: false },
  { id: 'Spend_Analytics', path: 'spend-analytics', title: 'Spend Analytics', icon: 'ti-pencil-alt', class: '', isHeader: false,
  isProd: false, isExternalLink: false },
  { id: 'PlayGround', path: 'pagebuilder', title: 'Play Ground', icon: 'fa fa-flag fa-2x pull-left', class: '', isHeader: true,
  isProd: false, isExternalLink: false },
  { id: 'vts', path: 'vehicle-tracking-system', title: 'Vehicle Tracking System',
  icon: 'fa fa-truck fa-2x pull-left', class: '', isHeader: false,
  isProd: false, isExternalLink: false },
  {
    id: 'tb', path: 'tagbox-trip', title: 'BoxLens',
    icon: '', class: '', isHeader: true,
    isProd: false, isExternalLink: false
  }
];

export const subMenus: Map<string, RouteInfo[]> = new Map<string, RouteInfo[]>();
subMenus.set('Admin_Section', [{ id: 'Sites', path: 'sites', title: 'Sites', icon: 'ti-location-pin', class: '', isHeader: false,
isProd: environment.production, isExternalLink: false },
   { id: 'Dictionary', path: 'dictionary', title: 'Dictionary', icon: 'ti-files', class: '', isHeader: false,
   isProd: environment.production, isExternalLink: false },
   { id: 'Transformation', path: 'transformation', title: 'Transformation', icon: 'ti-settings', class: '', isHeader: false,
   isProd: environment.production, isExternalLink: false },
   { id: 'Alerts', path: 'alerts', title: 'Alerts', icon: 'ti-alert', class: '', isHeader: false,
   isProd: environment.production, isExternalLink: false },
   { id: 'Logs', path: 'logs', title: 'EMR Logs', icon: 'ti-layers-alt', class: '', isHeader: false,
   isProd: environment.production, isExternalLink: false } ]);
subMenus.set('Report_Section', [
   { id: 'File_Received_Report', path: 'fileReceivedReport', title: 'Received Files', icon: 'ti-cloud-up', class: '', isHeader: false,
   isProd: environment.production, isExternalLink: false },
   { id: 'File_Processed_report', path: 'fileProcessedReport', title: 'Generated Files', icon: 'ti-write', class: '', isHeader: false,
   isProd: environment.production, isExternalLink: false } ]);
subMenus.set('Catalog', [{ id: 'Catalog', path: 'catalog', title: 'Catalog', icon: 'ti-layout-grid2', class: '', isHeader: false,
isProd: environment.production, isExternalLink: false },
   { id: 'Profiling', path: 'profiling-dashboard', title: 'Profiling', icon: 'ti-reload', class: '', isHeader: false,
   isProd: environment.production, isExternalLink: false } ]);
subMenus.set('Transformation', [{ id: 'Dictionary', path: 'dictionary', title: 'Dictionary', icon: 'ti-files', class: '', isHeader: false,
   isProd: environment.production, isExternalLink: false },
      { id: 'Transformation', path: 'transformation', title: 'Transformation', icon: 'ti-control-shuffle', class: '', isHeader: false,
      isProd: environment.production, isExternalLink: false } ]);
// subMenus.set('Energy_Monitoring', [
//    { id: 'Zenatix_overview', path: 'zenatix', title: 'Overview', icon: 'ti-panel', class: '', isHeader: false,
//     isProd: environment.production, isExternalLink: false },
//     { id: 'Zenatix_stat', path: 'zenatix-stat', title: 'Stats', icon: 'ti-user', class: '', isHeader: false,
//     isProd: environment.production, isExternalLink: false },
//    { id: 'Zenatix_alert', path: 'zenatix-alert', title: 'Alert', icon: 'ti-user', class: '', isHeader: false,
//    isProd: environment.production, isExternalLink: false } ]);
subMenus.set('User_Management', [
   { id: 'User_List', path: 'userlist', title: 'User List', icon: 'ti-panel', class: '', isHeader: false,
   isProd: environment.production, isExternalLink: false },
   { id: 'Roles_Access', path: 'roleaccess', title: 'Role Access', icon: 'ti-user', class: '', isHeader: false,
   isProd: environment.production, isExternalLink: false },
   { id: 'Ui_menu', path: 'uimenu', title: 'UI Menu', icon: 'ti-user', class: '', isHeader: false,
   isProd: environment.production, isExternalLink: false } ]);
   subMenus.set('Folder_Management', [
    { id: 'Upload_File', path: 'fileupload', title: 'Upload File to s3', icon: 'ti-export', class: '', isHeader: false,
    isProd: environment.production, isExternalLink: false },
    { id: 'Folder_Access_Config', path: 'folder-access-config', title: 'Folder Access Config', icon: 'ti-folder', class: '',
    isHeader: false, isProd: environment.production, isExternalLink: false },
    { id: 'Folder_Configuration', path: 'folder-configuration', title: 'Folder configuration', icon: 'ti-user', class: '', isHeader: false,
    isProd: environment.production, isExternalLink: false } ]);
subMenus.set('PlayGround', [
    { id: 'Custom_page_builder', path: 'pagebuilder', title: 'Custom Page Builder', icon: 'ti-wand', class: '', isHeader: false,
    isProd: environment.production, isExternalLink: false },
    { id: 'GridStar_Dashboard', path: 'gridstar-dashboard', title: 'Gridstar Dashboard Builder', icon: 'ti-wand', class: '', 
    isHeader: false, isProd: environment.production, isExternalLink: false }]);
subMenus.set('tb', [
    {
      id: 'tb-dashboard', path: 'tagbox-dashboard', title: 'Overview',
      icon: '../../assets/img/transit_tile.png', class: '', isHeader: false,
      isProd: environment.production, isExternalLink: false
    },
    {
      id: 'tb-trip', path: 'tagbox-trip', title: 'Trip', icon: '../../assets/img/transit_tile.png', class: '', isHeader: false,
      isProd: environment.production, isExternalLink: false
    },
    {
      id: 'tb-report', path: 'tagbox-reports', title: 'Reports',
      icon: '../../assets/img/transit_tile.png' , class: '', isHeader: false,
      isProd: environment.production, isExternalLink: false
    },
    {
      id: 'tb-device', path: 'tagbox-device', title: 'Hardware',
       icon: 'customIcon', class: '', isHeader: false,
      isProd: environment.production, isExternalLink: false
    },
    ]);

@Component({
  moduleId: module.id,
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.component.html'
})
export class SidebarComponent implements OnInit, LoggedInCallback {

  public menuItems: any[];
  public subMenus: Map<string, RouteInfo[]>;
  isProduction = environment.production;
  currentPageUrl: string;
  menuId: string;


  constructor(private identityManagementService: IdentityManagementService, private route: ActivatedRoute,
    private userService: UserLoginService, private router: Router, private sidebarService: SidebarService) {
  }

  ngOnInit() {

    if ( this.identityManagementService.isAccessConfigLoaded() === true ) {
      this.loadMenus();
    }

    this.identityManagementService.configChange.subscribe( value => {
      if ( value === true ) {
        this.userService.isAuthenticated(this);
      }
    });

    this.sidebarService.change.subscribe(menuId => {
      this.menuId = menuId;
     if (menuId !== '') {
        localStorage.setItem('Current_Selected_Menu', menuId);
     }
    });

    if ( this.menuId === '' || this.menuId === undefined) {
      this.menuId = localStorage.getItem('Current_Selected_Menu');
    }
  }

  isLoggedIn(message: string, loggedIn: boolean): void {
    if (loggedIn) {
      this.loadMenus();
    }
  }

  loadMenus() {
    this.menuItems = [];
    this.subMenus = new Map<string, RouteInfo[]>();
    ROUTES.forEach(menu => {
      if ( this.identityManagementService.isHavingAccess(menu.path) === true ) {
        this.menuItems.push(menu);
      }
    });

    subMenus.forEach((value: RouteInfo[], key: string) => {
        // console.log(key, value);
        if ( this.identityManagementService.isHavingAccess(this.identityManagementService.getMenuPath(key)) === true ) {
          const routesInfo: RouteInfo[] = [];
          this.subMenus.set(key, routesInfo);
          const routesInfoAll: RouteInfo[] = value;
          routesInfoAll.forEach(menu => {
            if ( this.identityManagementService.isHavingAccess(menu.path) === true ) {
              routesInfo.push(menu);
            }
          });
        }
    });

    // this.menuItems = ROUTES.filter(menuItem => menuItem);
    // this.subMenus = subMenus;
    const container = <HTMLScriptElement>document.querySelector(
      '.sidebar-wrapper'
    );
    Ps.initialize(container);
  }

  isNotMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

}
