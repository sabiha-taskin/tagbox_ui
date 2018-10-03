import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { IdentityManagementService } from '../services/identity-management.service';

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
  isActive: boolean;
}

export const ROUTES: RouteInfo[] = [
  { id: 'Dashboard', path: 'dashboard', title: 'OPS Dashboard', icon: 'ti-panel', class: '', isHeader: false,
   isProd: false, isExternalLink: false , isActive: false},
 /* { id: 'Admin_Section', path: 'sites', title: 'Admin', icon: 'ti-user', class: '', isHeader: true,
   isProd: false, isExternalLink: false }, */
   { id: 'Catalog', path: 'catalog', title: 'Data Pre Processing', icon: 'ti-settings', class: '', isHeader: true,
   isProd: false, isExternalLink: false, isActive: false },
   { id: 'Transformation', path: 'transformation', title: 'Data Transformation', icon: 'ti-control-shuffle', class: '', isHeader: true,
   isProd: false, isExternalLink: false , isActive: false},
  { id: 'Report_Section', path: 'fileReceivedReport', title: 'Data Exchange', icon: 'ti-exchange-vertical', class: '', isHeader: true,
  isProd: false, isExternalLink: false, isActive: false },
/*  { id: 'Energy_Monitoring', path: 'zenatix', title: 'Energy Monitoring', icon: 'ti-signal', class: '', isHeader: true,
  isProd: environment.production, isExternalLink: false }, */
  { id: 'User_Management', path: 'userlist', title: 'User Management', icon: 'ti-user', class: '', isHeader: true,
  isProd: false, isExternalLink: false, isActive: false },
  { id: 'Folder_Management', path: 'fileupload', title: 'Folder Management', icon: 'ti-folder', class: '',
  isHeader: true, isProd: false, isExternalLink: false, isActive: false },
  /*{ id: 'Smart_Procure', path: 'smart-procure', title: 'Smart Procure', icon: 'ti-stats-up', class: '', isHeader: false,
  isProd: false, isExternalLink: false },
  { id: 'Spend_Analytics', path: 'spend-analytics', title: 'Spend Analytics', icon: 'ti-pencil-alt', class: '', isHeader: false,
  isProd: false, isExternalLink: false }, */
  { id: 'PlayGround', path: 'gridstar-dashboard', title: 'Play Ground', icon: 'ti-flag', class: '', isHeader: true,
  isProd: false, isExternalLink: false, isActive: false },
 /* { id: 'vts', path: 'vehicle-tracking-system', title: 'Vehicle Tracking System',
  icon: 'ti-target', class: '', isHeader: false,
  isProd: false, isExternalLink: false } */
];

export const BUSINESSAPP: RouteInfo[] = [
  { id: 'Dashboard', path: 'sites', title: 'Site Visibility', icon: 'ti-eye', class: '', isHeader: false,
   isProd: false, isExternalLink: false, isActive: false },
   { id: 'Spend_Analytics', path: 'spend-analytics', title: 'Spend Analytics', icon: 'ti-pencil-alt', class: '', isHeader: false,
  isProd: false, isExternalLink: false, isActive: false },
  { id: 'Smart_Procure', path: 'smart-procure', title: 'Smart Procure', icon: 'ti-stats-up', class: '', isHeader: false,
  isProd: false, isExternalLink: false, isActive: false },
  // { id: 'Energy_Monitoring', path: 'zenatix', title: 'Energy Monitoring', icon: 'ti-bolt', class: '', isHeader: true,
  // isProd: environment.production, isExternalLink: false, isActive: false },
  { id: 'vts', path: 'vehicle-tracking-system', title: 'Vehicle Tracking System',
  icon: 'ti-truck', class: '', isHeader: false,
  isProd: false, isExternalLink: false , isActive: false},
  { id: 'tb', path: 'tagbox-trip', title: 'BoxLens',
    icon: '', class: '', isHeader: false,
    isProd: false, isExternalLink: false, isActive: true },
 /* { id: 'Admin_Section', path: 'sites', title: 'Admin', icon: 'ti-user', class: '', isHeader: true,
   isProd: false, isExternalLink: false },
   { id: 'Catalog', path: 'catalog', title: 'Data Pre Processing', icon: 'ti-settings', class: '', isHeader: true,
   isProd: false, isExternalLink: false },
  { id: 'Report_Section', path: 'fileReceivedReport', title: 'Data Exchange', icon: 'ti-exchange-vertical', class: '', isHeader: true,
  isProd: false, isExternalLink: false },
  { id: 'User_Management', path: 'userlist', title: 'User Management', icon: 'ti-user', class: '', isHeader: true,
  isProd: false, isExternalLink: false },
  { id: 'Folder_Management', path: 'fileupload', title: 'Folder Management', icon: 'ti-folder', class: '',
  isHeader: true, isProd: false, isExternalLink: false },
  { id: 'PlayGround', path: 'gridstar-dashboard', title: 'Play Ground', icon: 'ti-flag', class: '', isHeader: true,
  isProd: false, isExternalLink: false },
 /* { id: 'vts', path: 'vehicle-tracking-system', title: 'Vehicle Tracking System',
  icon: 'ti-target', class: '', isHeader: false,
  isProd: false, isExternalLink: false } */
];

@Component({
  selector: 'app-overview-dashboard',
  templateUrl: './overview-dashboard.component.html',
  styleUrls: ['./overview-dashboard.component.css']
})
export class OverviewDashboardComponent implements OnInit {

  public menuItems: any[];
  public menuBusinessApp: any[];
  isOverview = true;

  constructor(private router: Router,
     private identityManagementService: IdentityManagementService, private sidebarService: SidebarService) { }

  ngOnInit() {
    this.isOverview = true;
    this.loadMenus();
  }

  redirectMenu(menuId, path) {
    this.sidebarService.toggle(menuId, path);
    this.router.navigate(['/' + path]);
  }

  loadMenus() {
    this.menuItems = [];
    this.menuBusinessApp = [];
    ROUTES.forEach(menu => {
      if ( this.identityManagementService.isHavingAccess(menu.path) === true && menu.isActive === true ) {
        this.menuItems.push(menu);
      }
    });

    BUSINESSAPP.forEach(menub => {
      if ( this.identityManagementService.isHavingAccess(menub.path) === true && menub.isActive === true) {
        this.menuBusinessApp.push(menub);
      }
    })

  }


}
