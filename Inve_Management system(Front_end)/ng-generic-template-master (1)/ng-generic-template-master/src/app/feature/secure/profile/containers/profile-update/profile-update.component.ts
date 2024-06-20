import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentBase } from '@shared/abstracts/component-base';
import { FormBase } from '@shared/contracts';
import { EmployeesService } from '../../../Employee/containers/services/employees.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DesignationService } from '../../../Designation/services/designations.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss']
})
export class ProfileUpdateComponent extends ComponentBase implements FormBase {

  
  empid!: number;
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
  

  override initVariables(): void{
   
  }
  override subscribeEvents(): void {

    this.activatedroute.params.subscribe((params:any)=>
    {
      this.empid=params['empid'];
      console.log(this.empid);
    })
    this.employeeservice.getEmployeesById(this.empid).subscribe((data)=>{
      this.employeeName=data.name;
      this.designationId=data.designationId;
      this.dob=data.dob;
      //this.password=data?.password;
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
    if(this.empid)
      {
        this.loadEmployee();
      }
  }
  override load(): void {
    this.buildForm()
  }
  override unload(): void {
   
  }

  
  constructor(private employeeservice: EmployeesService, private router:Router,private activatedroute:ActivatedRoute, private designationservice:DesignationService,private date:DatePipe) {
    super();
    
  }
  buildForm(): void {
   
      this.form = new FormGroup({
        
       // productId:new FormControl('0',Validators.required),
        employeeName: new FormControl(null, Validators.required),
        email: new FormControl({ value: null}, Validators.required),
        designationId:new FormControl({ value: null }, Validators.required),
        dob: new FormControl(null,Validators.required),
        //password: new FormControl(null,Validators.required),
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
    console.log('form',formData);
   // console.log('hi');
   if(this.empid)
    {
      this.employeeservice.updateEmployee(this.empid,formData.employeeName,formData.designationId,formData.dob,formData.email,this.pass,this.employeeImage).subscribe(
        (response) => {
          console.log('Successfully updated employee:', response);
          this.router.navigate(['profile']);
        },
        (error) => {
          console.error('Error adding employees:', error);
        }
      );
      this.form.reset();
    }
  }
  
  loadEmployee(){
    // Load product data from service based on productId
    this.employeeservice.getEmployeesById(this.empid).subscribe((employee) => {
      this.form.setValue({
      //  this.userId:customer.userId,
        employeeName: employee.name,
        email:employee.email,
        designationId:employee.designationId,
        dob: this.date.transform(employee.dob,'yyyy-MM-dd'),
        // password: employee.password,
        //emplopeeImage: employee.emplopeeImage
        
      });
     // console.log(this.userName);
     // console.log(this.address);
    });
  }

}
