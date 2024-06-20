import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { FormBase } from '@shared/contracts';
import { DesignationService } from '../../services/designations.service';
import { ComponentBase } from '@shared/abstracts/component-base';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-designations-add',
  templateUrl: './designations-add.component.html',
  styleUrls: ['./designations-add.component.scss']
})
export class DesignationsAddComponent extends ComponentBase implements FormBase {
  CheckRoleExists:boolean=false;
  designationName:any[]=[]
  override initVariables(): void {
  }
  override subscribeEvents(): void {
   this.designationservice.designations().subscribe(list=>{
    this.designationName=list
   })
  }
  override load(): void {
    this.buildForm()
  }
  override unload(): void {
  }

  form!: FormGroup;

  buildForm(): void {
    this.form = new FormGroup({
    
      designationName: new FormControl(null, [Validators.required,this.CheckRoleExist()])
    });
  }
  bindForm(): void {
    
  }
  resetForm(): void {
    this.form.reset()
  }

  onSubmit(): void {
     
      if (this.form.valid) {
        const formData = this.form.value;
        this.designationservice.designationsAdd(formData).subscribe(
          (response) => {
            console.log('Successfully added designation:', response);
            this.router.navigateByUrl('designation');
            // Reset form after successful submission
            this.form.reset();
          },
          (error) => {
            console.error('Error adding designation:', error);
          }
        );
      }

      else{
        alert('Role exists')
      }
    
  }
  
 CheckRoleExist():ValidatorFn {
  return (control: AbstractControl): {[key: string]: boolean}|null=> {
    if(!control.value){
      return null;
    }
    
      //console.log(control)
     
      return this.designationName.find((x: any) => x.designationName.toLowerCase() === control.value.toLowerCase())
      ? { CheckRoleExists: true }: null;
  }
}
 

  constructor(private designationservice:DesignationService,private router:Router) { 
    super()
  }
}

