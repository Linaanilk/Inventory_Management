import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesComponent } from './containers/category/categories/categories.component';
import { CategoriesAddComponent } from './containers/category/categories-add/categories-add.component';
import { CategoriesUpdateComponent } from './containers/category/categories-update/categories-update.component';
import { GetproductsComponent } from './containers/products/getproducts/getproducts.component';
import { InsertProductsComponent } from './containers/products/insert-products/insert-products.component';
import { DeleteProductComponent } from './containers/products/delete-product/delete-product.component';
import { AuthorizationGuard } from '@core/guards/authorization.guard';
import { AuthenticationGuard } from '@core/guards/authentication.guard';

const routes: Routes = [
  { path: '', component: CategoriesComponent ,pathMatch:'full',canActivate:[AuthorizationGuard,AuthenticationGuard]},
  { path: 'categories/edit/:id', component: CategoriesUpdateComponent,canActivate:[AuthorizationGuard,AuthenticationGuard] },
  { path: 'categories/add', component: CategoriesAddComponent,canActivate:[AuthorizationGuard,AuthenticationGuard] },
  { path: 'categories/getproducts/:id', component: GetproductsComponent,canActivate:[AuthorizationGuard,AuthenticationGuard] },
  { path: 'addproducts/:id', component: InsertProductsComponent,canActivate:[AuthorizationGuard,AuthenticationGuard] },
  { path: 'updateproducts/:catid/:productid', component: InsertProductsComponent,canActivate:[AuthorizationGuard,AuthenticationGuard] },
  {path: 'categories/delete/:id',component: DeleteProductComponent,canActivate:[AuthorizationGuard,AuthenticationGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
