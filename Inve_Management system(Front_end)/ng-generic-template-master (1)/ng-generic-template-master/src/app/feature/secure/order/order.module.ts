import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ReactiveFormsModule
  ]
})
export class OrderModule { }
