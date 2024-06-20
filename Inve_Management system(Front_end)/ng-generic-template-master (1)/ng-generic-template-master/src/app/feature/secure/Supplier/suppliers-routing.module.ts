import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuppliersComponent } from './Containers/suppliers/suppliers.component';
import { InsertSuppliersComponent } from './Containers/insert-suppliers/insert-suppliers.component';


const routes: Routes = [
  { path: '', component: SuppliersComponent ,pathMatch:'full'},
  { path: 'suppliers/addsuppliers', component: InsertSuppliersComponent},
  { path: 'supplier/updatesuppliers/:supplierId', component: InsertSuppliersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule { }
