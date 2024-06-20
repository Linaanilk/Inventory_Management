import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './containers/employees/employees.component';
import { CommonModule } from '@angular/common';
import { InsertEmployeesComponent } from './containers/insert-employees/insert-employees.component';
import { AuthorizationGuard } from '@core/guards/authorization.guard';
import { AuthenticationGuard } from '@core/guards/authentication.guard';

const routes: Routes = [
  { path: '', component: EmployeesComponent ,pathMatch:'full',canActivate:[AuthorizationGuard,AuthenticationGuard]},
  {path:'employee/insert', component: InsertEmployeesComponent,canActivate:[AuthorizationGuard,AuthenticationGuard]},
  {path: 'employee/edit/:id', component: InsertEmployeesComponent,canActivate:[AuthorizationGuard,AuthenticationGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
