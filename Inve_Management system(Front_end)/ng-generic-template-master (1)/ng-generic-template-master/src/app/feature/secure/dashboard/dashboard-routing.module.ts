import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
//import { AuthenticationGuard } from '@core/guards/authentication.guard';
import { AuthorizationGuard } from '@core/guards/authorization.guard';
import { AuthenticationGuard } from '@core/guards/authentication.guard';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  canActivate: [AuthorizationGuard,AuthenticationGuard],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
