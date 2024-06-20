/**
 * @author Vishnu Somanath
 * @version 1.0.0
 * @return {void}
 * @example
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserAPI } from '@shared/constants/api-endpoints/user-api.const';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AppConfig } from '../configs';
import { CommunicationService } from './communication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private communicationService: CommunicationService,
    private router: Router
  ) { }

  authenticate(data:any): Observable<any> {
   // console.log(data)

    
    return this.communicationService.post<any>(UserAPI.authenticateUser(data),data)
      .pipe(
        catchError((error: any) => {
          // Handle error here
          alert('Authentication failed. Please check your credentials.');
          return throwError(error); // Rethrow the error to propagate it
        }),
        tap((response: any) => {
          if (response) {
            localStorage.setItem(AppConfig.auth.token, JSON.stringify(response));
            //localStorage.setItem('token', response.token.access_Token)
            
            //console.log(JSON.parse(JSON.stringify(localStorage.getItem(AppConfig.auth.token))).user)

          }
        }));
  }
  getLocalToken():any {
    return JSON.parse(localStorage.getItem(AppConfig.auth.token)||'{}');
  }
  isLoggedIn(): boolean {
    if (!!!(this.getLocalToken()).token?.access_Token){
      return false;
    }
    else{
    return true;
    }
  }

  logout(): void {
    localStorage.removeItem(AppConfig.auth.token);
    this.router.navigate(['/auth/login']);
  }
}
