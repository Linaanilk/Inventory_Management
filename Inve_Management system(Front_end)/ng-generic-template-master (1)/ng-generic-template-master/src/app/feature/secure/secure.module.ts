import { NgModule } from '@angular/core';
import { NgIdleModule } from '@ng-idle/core';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { SharedModule } from 'src/app/shared/shared.module';
import { SecureLayoutModule } from './secure-layout/secure-layout.module';
import { SecureRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure.component';
import { EmployeesComponent } from './Employee/containers/employees/employees.component';
import { SuppliersComponent } from './Supplier/Containers/suppliers/suppliers.component';
import { InsertSuppliersComponent } from './Supplier/Containers/insert-suppliers/insert-suppliers.component';
import { CustomersComponent } from './Customer/containers/customers/customers.component';
import { DeletedialogComponent } from './Customer/containers/deletedialog/deletedialog.component';
import { InsertCustomerComponent } from './Customer/containers/insert-customer/insert-customer.component';
import { GetCustomersComponent } from './Customer/containers/get-customers/get-customers.component';
import { GetOrderComponent } from './order/containers/get-order/get-order.component';
import { InsertOrderComponent } from './order/containers/insert-order/insert-order.component';
import { InvoiceGetComponent } from './Invoice/containers/invoice-get/invoice-get.component';



@NgModule({
  declarations: [
    SecureComponent,
    EmployeesComponent,
    SuppliersComponent,
    InsertSuppliersComponent,
    CustomersComponent,
    DeletedialogComponent,
    InsertCustomerComponent,
    GetCustomersComponent,
    GetOrderComponent,
    InsertOrderComponent,
    InvoiceGetComponent,

    
  ],
  imports: [
    SharedModule,
    SecureRoutingModule,
    SecureLayoutModule,
    NgIdleModule,
    NgIdleKeepaliveModule,
  ]
})
export class SecureModule { }
