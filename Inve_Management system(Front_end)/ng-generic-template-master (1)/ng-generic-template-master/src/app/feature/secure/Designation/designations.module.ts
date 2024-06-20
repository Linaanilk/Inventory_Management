import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignationsRoutingModule } from './designations-routing.module';
import { DesignationsComponent } from './container/designations/designations.component';
import { SharedModule } from '@shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { SecureSharedModule } from '../secure-shared/secure-shared.module';
import { DesignationsAddComponent } from './container/designations-add/designations-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DesignationsUpdateComponent } from './container/designations-update/designations-update.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button'; 


@NgModule({
  declarations: [
    DesignationsComponent,
    DesignationsAddComponent,
    DesignationsUpdateComponent
  ],
  imports: [
    CommonModule,
    DesignationsRoutingModule,
    SharedModule,
    MatDialogModule,
    SecureSharedModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule 
  ]
})
export class DesignationsModule { }
