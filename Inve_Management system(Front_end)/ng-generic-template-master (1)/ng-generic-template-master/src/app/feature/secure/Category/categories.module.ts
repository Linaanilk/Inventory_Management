import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { CategoriesRoutingModule } from './categories-routing.module';
import { SharedModule } from '@shared/shared.module';
import { SecureSharedModule } from '../secure-shared/secure-shared.module';
import { SecureLayoutModule } from '../secure-layout/secure-layout.module';
import { CategoriesComponent } from './containers/category/categories/categories.component';
import { GetproductsComponent } from './containers/products/getproducts/getproducts.component';
//import { CategoriesUpdateComponent } from './containers/categories-update/categories-update.component';
import { CategoriesAddComponent } from './containers/category/categories-add/categories-add.component';
import { CategoriesUpdateComponent } from './containers/category/categories-update/categories-update.component';
import { InsertProductsComponent } from './containers/products/insert-products/insert-products.component';
import { DeleteProductComponent } from './containers/products/delete-product/delete-product.component';
import { DeletedialogComponent } from './containers/products/deletedialog/deletedialog.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    CategoriesComponent,
    GetproductsComponent,
    CategoriesUpdateComponent,
    CategoriesAddComponent,
    InsertProductsComponent,
    DeleteProductComponent,
    DeletedialogComponent,
  
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule,
    MatDialogModule,
    ReactiveFormsModule,
    SecureSharedModule,
    SecureLayoutModule,
    CardModule,
    ButtonModule
  ]
})
export class CategoriesModule { }
