import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetCustomersComponent } from './containers/get-customers/get-customers.component';
import { InsertCustomerComponent } from './containers/insert-customer/insert-customer.component';
import { AuthenticationGuard } from '@core/guards/authentication.guard';
import { AuthorizationGuard } from '@core/guards/authorization.guard';

const routes: Routes = [
  {path: '',component:GetCustomersComponent },
  {path: 'customer/insert-customers',component:InsertCustomerComponent, canActivate: [AuthorizationGuard]},
  {path: 'customer/update-customers/:userId', component:InsertCustomerComponent, canActivate: [AuthorizationGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
