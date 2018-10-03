import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, BrowserXhr } from '@angular/http';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ScrollerDirective } from './directives/scroll.directive'
import { DndModule } from 'ng2-dnd';
import { GridsterModule } from 'angular-gridster2';
import { DynamicModule } from 'ng-dynamic-component';

import { DxTabPanelModule, DxTabsModule, DxCheckBoxModule,
  DxTemplateModule, DxDataGridModule, DxChartModule,
  DxTagBoxModule, DxPopupModule, DxButtonModule,
  DxSelectBoxModule, DxTextAreaModule, DxFormModule,
  DxFormComponent, DxMapModule, DxVectorMapModule, DxPieChartModule, DxListModule, DxCircularGaugeModule,
  DxPopoverModule, DxBoxModule, DxTileViewModule, DxTextBoxModule, DxRadioGroupModule, DxAccordionModule, DxMultiViewModule,
  DxActionSheetModule, DxFilterBuilderModule, DxContextMenuModule, DxPivotGridModule, DxBarGaugeModule,
  DxRangeSelectorModule, DxTreeMapModule, DxValidatorModule, DxPolarChartModule, DxDateBoxModule, DxFileUploaderModule,
  DxDropDownBoxModule, DxTreeListModule, DxTreeViewModule, DxScrollViewModule, DxNumberBoxModule, DxColorBoxModule
} from 'devextreme-angular';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { LoginComponent } from './shared/login/login.component';
import { ForgotpasswordComponent, ForgotPassword2Component } from './shared/forgotpassword/forgotpassword.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProgressbarComponent} from './components/progressbar.component';
import { OverviewDashboardComponent } from './overview-dashboard/overview-dashboard.component'
import { LoadingBarHttpModule } from '@ngx-loading-bar/http';
import { FileSizePipe } from '../utils';
import { TagBoxComponent } from './tag-box/tag-box.component';
import { TbDashboardComponent } from './tag-box/tb-dashboard/tb-dashboard.component';
import { TbAccountComponent } from './tag-box/tb-account/tb-account.component';
import { TbTripComponent } from './tag-box/tb-trip/tb-trip.component';
import { TbReportComponent } from './tag-box/tb-report/tb-report.component';
import { TbDeviceComponent } from './tag-box/tb-device/tb-device.component';
import { TbUserComponent } from './tag-box/tb-user/tb-user.component';
import { UserComponent } from './user/user.component';
import { RoleAccessComponent } from './user-management/role-access/role-access.component';
import { UiMenuComponent } from './user-management/ui-menu/ui-menu.component';
import { UserListComponent } from './user-management/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotpasswordComponent,
    ForgotPassword2Component,
    NotfoundComponent,
    ScrollerDirective,
    ProgressbarComponent,
    OverviewDashboardComponent,
    TagBoxComponent,
    TbDashboardComponent,
    TbAccountComponent,
    TbTripComponent,
    TbReportComponent,
    TbDeviceComponent,
    TbUserComponent,
    FileSizePipe,
    UserComponent,
    RoleAccessComponent,
    UiMenuComponent ,
    UserListComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    DxDataGridModule,
    DxChartModule,
    DxCircularGaugeModule,
    DxTabPanelModule,
    DxTabsModule,
    DxCheckBoxModule,
    DxTemplateModule,
    DxTagBoxModule,
    DxPopupModule,
    DxPopoverModule,
    DxButtonModule,
    DxSelectBoxModule,
    DxTextAreaModule,
    DxFormModule,
    DxMapModule,
    DxVectorMapModule,
    DxPieChartModule,
    DxListModule,
    DxBoxModule,
    DxTileViewModule,
    DxTextBoxModule,
    DxRadioGroupModule,
    DxAccordionModule,
    DxMultiViewModule,
    // HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    DxActionSheetModule,
    DxFilterBuilderModule,
    DxContextMenuModule,
    DxPivotGridModule,
    DxBarGaugeModule,
    DxPolarChartModule,
    DxRangeSelectorModule,
    DxTreeMapModule,
   //  YourDynamicModule,
    DndModule.forRoot(),
    DxValidatorModule,
    DxDateBoxModule,
    DxDropDownBoxModule,
    DxTreeViewModule,
    DxFileUploaderModule,
    ReactiveFormsModule,
    DxScrollViewModule,
    GridsterModule,
    DxNumberBoxModule,
    DxColorBoxModule,
    DynamicModule.withComponents([]),
    LoadingBarHttpModule
  ],
  providers: [
    ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {

}
