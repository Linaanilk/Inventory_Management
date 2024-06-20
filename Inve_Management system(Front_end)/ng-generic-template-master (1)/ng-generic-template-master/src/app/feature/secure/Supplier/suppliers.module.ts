import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './Containers/dialog/dialog.component';
import { TableModule } from 'primeng/table';




@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    SuppliersRoutingModule,
    ReactiveFormsModule,
    TableModule
  ]
})
export class SuppliersModule { }
