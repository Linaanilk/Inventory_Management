import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComponentBase } from '@shared/abstracts/component-base';
import { FormBase } from '@shared/contracts';
import { DesignationService } from '../../services/designations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-designations-update',
  templateUrl: './designations-update.component.html',
  styleUrls: ['./designations-update.component.scss']
})
export class DesignationsUpdateComponent extends ComponentBase implements FormBase {
  designations: any[] = [];
  designationId!: number;
  designationName!: string;
  dName:any[]=[];
  form!:FormGroup;
  //CheckRoleExists:boolean=false;
  override initVariables(): void {
    
  }
  override subscribeEvents(): void {
    this.activatedroute.params.subscribe((params: any) => {
      // Extract the 'id' parameter from the route params
      const id = params['id'];
      console.log(id);
      
       this.designationservice.designationsEdit(id).subscribe(
        (data) => {
          this.designationId = data.designationId;
          this.designationName = data.designationName;
         console.log('Designation edited:', data);
      },
        (error) => {
          console.error('Error editing designation:', error);
          
        }
      );
    });
    this.designationservice.designations().subscribe(list=>{
      this.dName=list;
      console.log('dname',this.dName)
    })
   
  }
  override load(): void {
    this.buildForm();
  }
  override unload(): void {
    
  }

  
  buildForm(): void {
    this.form = new FormGroup({
      //designationId:new FormControl(null,Validators.required),
      designationName: new FormControl(null, [Validators.required,this.CheckRoleExist()])
    });
  }
  
  bindForm(): void {
   
  }
  resetForm(): void {
    
  }

  constructor(private designationservice:DesignationService,private activatedroute:ActivatedRoute, private router:Router) { 
    super()
  }

 

  onSubmit(): void {
    if (this.form.valid) {
      const updatedDesignationName = this.form.value.designationName;
      const id=this.designationId
      this.designationservice.designationsUpdate(id, updatedDesignationName).subscribe(
        () => {
          console.log(id);
          console.log(updatedDesignationName);
          console.log('Designation updated successfully.');
          this.router.navigateByUrl('designation');
        },
        error => {
          console.error('Error updating designation:', error);
          // Handle error
        }
      );
    }
  }
  
 
   
 CheckRoleExist():ValidatorFn {
  return (control: AbstractControl): {[key: string]: boolean}|null=> {
    if(!control.value){
      return null;
    }
    
    // console.log(control)
    // console.log(this.dName)
     return this.dName.find((x: any) => x.designationName.toLowerCase() === control.value.toLowerCase())
     ? { CheckRoleExists: true }: null;
   
  }
}

}
