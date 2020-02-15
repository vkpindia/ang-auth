import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLayoutComponent } from './layout/user-layout/user-layout/user-layout.component';
import { OnboardLayoutComponent } from './layout/onboard/onboard-layout/onboard-layout.component';

const routes: Routes = [
  {
    path: '',
    component: OnboardLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/onboard/onboard.module').then(m => m.OnboardModule)
      }
    ]
  },
  {
    path: 'app',
    component: UserLayoutComponent,
    data: {
      breadcrumb: 'Home'
    },
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
        data: {
          breadcrumb: 'Dashboard'
        }
      },
      {
        path: 'user',
        loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
        data: {
          breadcrumb: 'Users'
        }
      },
      {
        path: 'event',
        loadChildren: () => import('./modules/event/event.module').then(m => m.EventModule),
        data: {
          breadcrumb: 'Events'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
