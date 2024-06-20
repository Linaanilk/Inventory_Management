import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private authService: AuthService,
  ) { }

  private checkGuard(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> {
    if (this.authService.isLoggedIn()) {
      return of(true);
    } else {
      this.authService.logout();
      return of(false);
    }
  }

  canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> {
    return this.checkGuard(activatedRouteSnapshot, state);
  }
}
