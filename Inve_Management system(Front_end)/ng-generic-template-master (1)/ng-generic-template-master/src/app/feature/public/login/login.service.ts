import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { EmployeesService } from '../../secure/Employee/containers/services/employees.service';
import { AppConfig } from '@core/configs/app.config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
employees:any;
token!:any;
email:any;
  private readonly landingScreen = '/dashboard';

  constructor(
    private authService: AuthService,
    private router: Router,
    private employeeservice:EmployeesService
  ) { }

  login(data:any): void 
  {
    
    this.authService.authenticate(data)
      .subscribe((x) => {
      

             
              this.email = data.username;
              
                console.log('emaillllllll',this.email)
              this.employeeservice.getEmployees().subscribe(data => {
                  this.employees = data.filter((employee: any) => {
                      if(employee.email === this.email && employee.updatedDate == null)
                        {
                      
                          this.router.navigate(['/auth/change-password']);
                          
                        }
                        else{
                          this.router.navigate([this.landingScreen]);
                        }
                  });
              });

      }
    );
  }
}

