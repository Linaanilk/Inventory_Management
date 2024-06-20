import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetOrderComponent } from './containers/get-order/get-order.component';
import { InsertOrderComponent } from './containers/insert-order/insert-order.component';
import { AuthenticationGuard } from '@core/guards/authentication.guard';
import { AuthorizationGuard } from '@core/guards/authorization.guard';


const routes: Routes = [
  {path: '', component:GetOrderComponent, canActivate: [AuthorizationGuard,AuthenticationGuard]},
  {path: 'orders/addOrders', component:InsertOrderComponent, canActivate: [AuthorizationGuard,AuthenticationGuard]},
  {path: 'orders/editOrders/:orderId',component:InsertOrderComponent,  canActivate: [AuthorizationGuard,AuthenticationGuard]},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
