import { cancelActive } from 'aws-sdk/clients/datapipeline';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { NotfoundComponent} from './notfound/notfound.component'
import {
  ForgotpasswordComponent,
  ForgotPassword2Component
} from './shared/forgotpassword/forgotpassword.component';
import { UserIdentityGuard } from './user-identity.guard';
import { AccessResolver } from './access-resolver';
import { OverviewDashboardComponent } from './overview-dashboard/overview-dashboard.component';
import { TagBoxComponent } from './tag-box/tag-box.component';
import { TbAccountComponent } from './tag-box/tb-account/tb-account.component';
import { TbDashboardComponent } from './tag-box/tb-dashboard/tb-dashboard.component';
import { TbTripComponent } from './tag-box/tb-trip/tb-trip.component';
import { TbReportComponent } from './tag-box/tb-report/tb-report.component';
import { TbDeviceComponent } from './tag-box/tb-device/tb-device.component';
import { TbUserComponent } from './tag-box/tb-user/tb-user.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    resolve: {
      configStatus: AccessResolver
    }
  },
  {
    path: 'overview',
    component: OverviewDashboardComponent,
    canActivate: [UserIdentityGuard]
  },

  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  },
  {
    path: 'forgotpassword/:email',
    component: ForgotPassword2Component
  },
  {
    path: 'notfound',
    component: NotfoundComponent,
    canActivate: [UserIdentityGuard]
  },
  {
   path: 'tagbox',
   component: TagBoxComponent,
   canActivate: [UserIdentityGuard]
  },
  {
    path: 'tagbox-account',
    component: TbAccountComponent,
    canActivate: [UserIdentityGuard]
  },
  {
    path: 'tagbox-dashboard',
    component: TbDashboardComponent,
    canActivate: [UserIdentityGuard]
  },
  {
    path: 'tagbox-trip',
    component: TbTripComponent,
    canActivate: [UserIdentityGuard]
  },
  {
    path: 'tagbox-reports',
    component: TbReportComponent,
    canActivate: [UserIdentityGuard]
  },
  {
    path: 'tagbox-device',
    component: TbDeviceComponent,
    canActivate: [UserIdentityGuard]
  },
  {
    path: 'tagbox-user',
    component: TbUserComponent,
    canActivate: [UserIdentityGuard]
  },
  {
    path: '**',
    redirectTo: '/notfound',
    pathMatch: 'full'
  }
];
