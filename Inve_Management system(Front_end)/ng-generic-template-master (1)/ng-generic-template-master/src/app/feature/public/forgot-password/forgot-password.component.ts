import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppConfig } from '@core/configs';
import { ComponentBase } from '@shared/abstracts/component-base';
import { FormBase } from '@shared/contracts';
import { DesignationService } from '../../secure/Designation/services/designations.service';
import { EmployeesService } from '../../secure/Employee/containers/services/employees.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent extends ComponentBase implements FormBase{
  form!:FormGroup;
  newPassword!: any;
  oldPassword!: any;
  formData: any;
  token: any;
  employees: any[]=[];
  userEmail:any;
  data:any;
  constructor(private employeeservice: EmployeesService, private router:Router) {
    super();
    
    this.token = localStorage.getItem(AppConfig.auth.token);

    if (this.token) {
        this.token = JSON.parse(this.token);
        this.userEmail = this.token.user;
    } 
    else {
        // Handle case where token is not found in localStorage
    }
    
}
  override initVariables(): void {
    
  }
  override subscribeEvents(): void {
   
  }
  

  override load(): void {
   this.buildForm();
  }
  override unload(): void {
   
  }
  buildForm(): void {
  this.form=new FormGroup({
    oldPassword:new FormControl(null,Validators.required),
    newPassword:new FormControl(null,Validators.required),
    confirmpassword:new FormControl(null,Validators.required)
  })
  }
  bindForm(): void {
   
  }
  resetForm(): void {
    
  }
    onSubmit()
    {
      this.formData = this.form.value;
      if(this.formData.newPassword != this.formData.confirmpassword)
        {
          alert('Passwords do not match');
          return;
        }
        else
        {
      //console.log(this.formData);
      //console.log(this.userEmail);
      this.employeeservice.changeEmployeePassword(this.userEmail, this.formData.oldPassword, this.formData.newPassword)
      .subscribe(
        (response) => {
          
          alert('Password changed successfully');
          console.log('Password changed successfully');
          this.router.navigate(['/auth/login']);
        },
        (error) => {
          alert('Invalid Credentials');
          console.error('Error changing password:', error);
        }
      );
    }
     
      
    }
    
  }
