import { DatePipe } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { AppComponent } from '@core/components/app/app.component';
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { setAppInjector } from './core/services/app-injector.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AuthInterceptorProvider } from '@core/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [AuthInterceptorProvider, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector, public dialog:MatDialog) {
    setAppInjector(injector);
  }
}
