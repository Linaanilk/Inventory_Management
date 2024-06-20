import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { AppLayoutComponent } from './app-layout/app-layout.component';

@NgModule({
  declarations: [
    AppLayoutComponent,
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    AppLayoutComponent,
  ]
})
export class SecureLayoutModule { }
