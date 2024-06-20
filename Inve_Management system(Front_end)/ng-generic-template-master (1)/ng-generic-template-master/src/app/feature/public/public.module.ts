import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { RegistrationComponent } from './registration/registration.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { ReportComponent } from '../secure/Daily-report/report/report.component';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    PublicComponent,
    RegistrationComponent,
    PasswordChangeComponent,
    ReportComponent,
   
  ],
  imports: [
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }
