import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InvoicePrintComponent } from './containers/invoice-print/invoice-print.component';
import { SharedModule } from '@shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    InvoicePrintComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatDialogModule
  ]
})
export class InvoiceModule { }
