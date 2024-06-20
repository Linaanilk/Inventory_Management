import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { FormBase } from '@shared/contracts';
import { EmployeesService } from '../services/employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-insert-employees',
  templateUrl: './insert-employees.component.html',
  styleUrls: ['./insert-employees.component.scss']
})
export class InsertEmployeesComponent extends ComponentBase implements FormBase {

  id!: number;
  employeeName!: any;
  designationId!: number;
  dob!:Date;
  email!:any;
  password!:any;
  employeeImage:any;
  form!:FormGroup;
  emailId:any[]=[];
  employeeId!:number;
  //isEditMode:boolean=true;
  //designation: designation[]=[];

  constructor(private employeeservice:EmployeesService,private router:Router, private activatedroute:ActivatedRoute,private date:DatePipe) {
    super();
  }
  override initVariables(): void {
   
  }
  override subscribeEvents(): void {
      this.activatedroute.params.subscribe((params:any)=>{
        this.id=+params['id'];
        console.log(this.id);
      })
      if(this.id)
        {
          this.loadForm();
        }
  }
  override load(): void {
    this.buildForm();
  }
  override unload(): void {
    
  }

  
  buildForm(): void {
    this.form = new FormGroup({
     // employeeId: new FormControl('0', Validators.required),
     employeeName: new FormControl(null, Validators.required),
      designationId: new FormControl(null, Validators.required),
      dob: new FormControl(null, [Validators.required, this.CheckDateAbove18()]),
      email: new FormControl(null, [Validators.required, Validators.email, this.CheckEmailExist()]),
      //password: new FormControl(null, [Validators.required, Validators.minLength(6)]) ,
      employeeImage: new FormControl(null, Validators.required)
    });
  }
  bindForm(): void {
    
  }
  resetForm(): void {
   
  }

  onSubmit(): void {
   
       const formData = this.form.value;
        console.log('hello');
        if(this.form.valid)
         {
          //console.log('hello');

          if(this.id)
            {
              //console.log(formData)
              console.log('update');
        this.employeeservice.updateEmployee(this.id,formData.employeeName, formData.designationId,formData.dob,formData.email, formData.password, formData.employeeImage).subscribe(
          (response) => {
            console.log('Successfully added employee:', response);
            console.log()
            this.form.reset(formData);
            
            this.router.navigate(['/employee']); // Use the correct route path
          },
          (error) => {
            console.error('Error adding employee:', error);
          }
        );
      }
      else{
        this.employeeservice.addEmployees(0,formData.employeeName, formData.designationId,formData.dob,formData.email, formData.password, formData.employeeImage).subscribe(
          (response) => {
            console.log('Successfully added employee:', response);
            console.log()
            this.form.reset(formData);
            
            this.router.navigate(['/employee']); // Use the correct route path
          },
          (error) => {
            console.error('Error adding employee:', error);
          }
        );
      }
    }
  }

      loadForm()
      {
        this.employeeservice.getEmployeesById(this.id).subscribe((employee) => {
          console.log(employee)
          this.form.setValue({
              //id:employee.employeeId,
             employeeName:employee.name,
             designationId: employee.designationId,
             dob:this.date.transform(employee.dob,'yyyy-MM-dd'),
             //dob:employee.dob,
             employeeImage: employee.image,
             email:employee.email,
            // password:employee.password,
          });
          console.log(this.form.value)
        });
        
      }

           
      CheckDateAbove18(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } | null => {
          if (!control.value) {
            return null; 
          }
      
          const selectedDate = new Date(control.value);
          const currentDate = new Date();
          const ageDifference = currentDate.getFullYear() - selectedDate.getFullYear();
          
          if (ageDifference < 18) {
            return { CheckDateAbove18: true }; 
          }
      
          return null; 
        };
      }
             
 CheckEmailExist():ValidatorFn {
  return (control: AbstractControl): {[key: string]: boolean}|null=> {
    if(!control.value){
      return null;
    }
    this.employeeservice.getEmployees().subscribe(list=>{
      this.emailId=list;
     // console.log(this.emailId)
      //console.log(control.value)
    })
     return this.emailId.find((x: any) => x.email.toLowerCase() == control.value.toLowerCase())
     ? { CheckEmailExist: true }: null;
    
   
  }
}
      
     
    }
  






