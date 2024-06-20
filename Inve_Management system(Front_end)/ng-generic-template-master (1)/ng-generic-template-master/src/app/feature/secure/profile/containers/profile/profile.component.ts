import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentBase } from '@shared/abstracts/component-base';

import { EmployeesService } from '../../../Employee/containers/services/employees.service';
import { AppConfig } from '@core/configs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends ComponentBase implements OnInit {


  id!: number;
  employees: any[]=[];
  token!:any;
 employeee:any[]=[];
 employeeId!:number;
 employeeName!:any;
 designation:any;
 Email:any;
 dob!:Date;
 image!:any;

  override initVariables(): void{
   
  }
  override subscribeEvents(): void {
    this.employeeservice.getEmployees().subscribe(list=>{
      this.employees=list;
      console.log(this.employees);
    })
  }
  override load(): void {
    
  }
  override unload(): void {
   
  }
  // delete(id: number): void {
  //   console.log(id);
  //   this.dialog.open(DeletedialogComponent, {
  //     data: { id: id }
  //   });
  constructor(private employeeservice: EmployeesService, private router:Router) {
    super();
    this.token=localStorage.getItem(AppConfig.auth.token)
    this.token=JSON.parse(this.token);

    this.employeeservice.getEmployees().subscribe(data => {
      const userEmail = this.token.user;
      console.log('Filtering employees for email:', userEmail);
    
      this.employees = data.filter((employee: any) => employee.email === userEmail);
      
      // Check if any employees match the filter
      if (this.employees.length > 0) {
        // Assuming employeeId is a property of each employee object
        // Here, I'm just accessing the first employee's employeeId
        for(let itme of this.employees){
          console.log(itme)
        }
        this.employeeId = this.employees[0].employeeId;
        this.employeeName=this.employees[0].name;
        this.Email=userEmail;
        this.designation=this.employees[0].designationName;
        this.dob=this.employees[0].dob;
        this.image=this.employees[0].image;
        console.log('Employee ID:', this.employeeId);
      } else {
        console.log('No employee found for email:', userEmail);
      }
    
      console.log('Filtered employees:', this.employees);
    });
  }

  
  }
  
  



