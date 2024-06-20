import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthInterceptorProvider } from '@core/interceptors/auth.interceptor';
import { ErrorInterceptorProvider } from '@core/interceptors/error.interceptor';
import { FakeBackendInterceptorProvider } from '@core/interceptors/fake-backend.interceptor';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./feature/public/public.module').then(m => m.PublicModule)
  },
  {
    path: '',
    loadChildren: () => import('./feature/secure/secure.module').then(m => m.SecureModule),
    
    data: {
      breadcrumb: 'Home'
    },
    //pathMatch:'full'
  },
  {
    path: '**',
    redirectTo: 'auth/login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
  providers: [
    
    AuthInterceptorProvider,
    ErrorInterceptorProvider
  ]
})
export class AppRoutingModule { }
