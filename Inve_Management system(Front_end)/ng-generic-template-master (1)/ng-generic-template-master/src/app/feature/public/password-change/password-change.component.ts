import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ComponentBase } from '@shared/abstracts/component-base';
import { FormBase } from '@shared/contracts';
import { DesignationService } from '../../secure/Designation/services/designations.service';
import { EmployeesService } from '../../secure/Employee/containers/services/employees.service';
import { AppConfig } from '@core/configs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.scss']
})
export class PasswordChangeComponent extends ComponentBase implements FormBase {

  
  employeeId!: number;
  employees: any[]=[];
  form!:FormGroup;
  employeeName:any;
  email:any;
  designationId!:number;
  dob!:Date;
  password:any;
  employeeImage:any;
  designationName:any;
  pass:any;
  token:any;

  override initVariables(): void{
   
  }
  override subscribeEvents(): void {

    // this.activatedroute.params.subscribe((params:any)=>
    // {
    //   this.empid=params['empid'];
    //   console.log('EmployeeId',this.empid);
    // })

    console.log('idddddd');
    console.log(this.employeeId);
   
   
  }
  override load(): void {
    this.buildForm()
  }
  override unload(): void {
   
  }

  
  constructor(private employeeservice: EmployeesService, private router:Router,private activatedroute:ActivatedRoute, private designationservice:DesignationService,private date:DatePipe) {
    super();
    
    this.token = localStorage.getItem(AppConfig.auth.token);

    if (this.token) {
        this.token = JSON.parse(this.token);
        const userEmail = this.token.user;
        console.log('constructor',userEmail)
        this.employeeservice.getEmployees().subscribe(data => {
          this.employees = data.filter((employee: any) => employee.email === userEmail);
            
            this.employeeId=this.employees[0].employeeId;
            this.getEmployeeId(this.employeeId);
            console.log(this.employeeId)
        })
        console.log('EmployeeId:',this.employeeId);
        
    } else {
        // Handle case where token is not found in localStorage
    }
    
}
getEmployeeId(employeenumber:number)
{
    
  this.employeeservice.getEmployeesById(this.employeeId).subscribe((data)=>{
    this.employeeName=data.name;
    this.designationId=data.designationId;
    this.dob=data.dob;
    this.password=data.password;
    this.pass=this.password
   // this.desId=this.designationId;
    this.email=data.email;
    this.employeeImage=data.image;
   // console.log(this.employees);
   console.log('data:',data);
   this.designationservice.designationsEdit(this.designationId).subscribe((dat)=>{
    this.designationName=data.designationName;
   })
  })
}

  buildForm(): void {
   
      this.form = new FormGroup({
        
       // productId:new FormControl('0',Validators.required),
        // employeeName: new FormControl(null, Validators.required),
        // email: new FormControl({ value: null}, Validators.required),
        // designationId:new FormControl({ value: null }, Validators.required),
        // dob: new FormControl(null,Validators.required),
        password: new FormControl(null,Validators.required),
        confirmpassword:new FormControl(null,Validators.required)
        //emplopeeImage: new FormControl(null,Validators.required)
       // productDescription: new FormControl(null, Validators.required)
      });
    
  }
  bindForm(): void {
    throw new Error('Method not implemented.');
  }
  resetForm(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(): void {
    const formData = this.form.value;
    //console.log(this.employeeId)
    //console.log('form',formData);
   // console.log('hi');
   if(formData.password==formData.confirmpassword)
    {
      if(this.employeeId)
        {
          this.employeeservice.updateEmployee(this.employeeId,this.employeeName,this.designationId,this.dob,this.email,formData.password,this.employeeImage).subscribe(
            (response) => {
              console.log('Successfully updated password:', response);
              this.router.navigate(['profile']);
            },
            (error) => {
              console.error('Error adding password:', error);
            }
          );
          this.form.reset();
        }
    }
    else
    {
      console.log("Incorrect password");
    }
  
  }
  
}
