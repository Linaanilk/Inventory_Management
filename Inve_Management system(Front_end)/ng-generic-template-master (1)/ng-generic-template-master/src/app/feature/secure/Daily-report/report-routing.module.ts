import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { AuthenticationGuard } from '@core/guards/authentication.guard';
import { AuthorizationGuard } from '@core/guards/authorization.guard';

const routes: Routes = [
  {path: '', component:ReportComponent, canActivate: [AuthorizationGuard,AuthenticationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
