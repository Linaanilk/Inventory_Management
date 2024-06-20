import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './containers/profile/profile.component';
import { ProfileUpdateComponent } from './containers/profile-update/profile-update.component';
import { BreadcrumbService } from 'xng-breadcrumb';
import { AuthenticationGuard } from '@core/guards/authentication.guard';
import { AuthorizationGuard } from '@core/guards/authorization.guard';

const routes: Routes = [{ path: '', component: ProfileComponent },
{path: 'profile/profile-update/:empid', component: ProfileUpdateComponent, canActivate: [AuthorizationGuard,AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
