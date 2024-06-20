import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AppConfig } from '@core/configs';
import { AuthService } from '@core/services/auth.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivateChild,CanActivate {
  token:any;
  constructor(
    private router: Router,private authservice:AuthService
  ) {
    this.token=localStorage.getItem(AppConfig.auth.token);
      this.token=JSON.parse(this.token);
   }
   
  canActivateChild(activatedRouteSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : Observable<boolean> {
  return this.checkGuard(activatedRouteSnapshot, state);
}

  

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkGuard(route,state)
  }


  private checkGuard(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> {
    if (!this.isAuthorized(state)) {
      this.router.navigate(['no-access']);
      return of(false);
    } else {
      return of(true);
    }
  }

  private isAuthorized(state:RouterStateSnapshot): boolean {
    if((
      state.url.includes('designations/add') ||
      state.url.includes('designations/edit/:id')  ||
      state.url.includes('employee/insert')  ||
      state.url.includes('employee/edit/:id')  ||
      state.url.includes('/employee')||
      state.url.includes('designation')
    )

    &&(this.token?.role=='Inventory Manager' && 'Sales Manager')){
      return false;
    }
    if((
      state.url.includes('categories/edit/:id') ||
      state.url.includes('categories/add')  ||
      state.url.includes('categories/getproducts/:id')  ||
      state.url.includes('addproducts/:id') ||
      state.url.includes('updateproducts/:catid/:productid')  ||
      state.url.includes('categories/delete/:id')||
      state.url.includes('/category')  
    
    ) && (this.token?.role == 'Sales Manager')){
      return false;
    }
    return true;
  
  }

  
  
   
}
