import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { InsertEmployeesComponent } from './containers/insert-employees/insert-employees.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeletedialogComponent } from './containers/deletedialog/deletedialog.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    InsertEmployeesComponent,
    DeletedialogComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule
  ]
})
export class EmployeesModule { }
