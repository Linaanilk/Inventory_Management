import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentBase } from '@shared/abstracts/component-base';
import { FormBase } from '@shared/contracts';
import { CategoryService } from '../../services/categories.service';

@Component({
  selector: 'app-categories-add',
  templateUrl: './categories-add.component.html',
  styleUrls: ['./categories-add.component.scss']
})
export class CategoriesAddComponent extends ComponentBase implements FormBase {
  form!: FormGroup;
  categoryName:any[]=[];

  constructor(private categoryService: CategoryService, private router: Router) { 
    super();
  }

  override initVariables(): void {
    // Initialize variables if needed
  }

  override subscribeEvents(): void {
    // Subscribe to events if needed
    this.categoryService.GetCategories().subscribe(list=>{
      this.categoryName=list;
    })
  }

  override load(): void {
    this.buildForm();
  }

  override unload(): void {
    // Clean up or unsubscribe from events if needed
  }

  buildForm(): void {
    this.form = new FormGroup({
      categoryName: new FormControl(null, [Validators.required,this.CheckCategoryExist()]),
      categoryImage: new FormControl(null, Validators.required)
    });
  }

  bindForm(): void {
    // Bind form data if needed
  }

  resetForm(): void {
    this.form.reset();
  }

  onSubmit(): void {
    if (this.form.valid) {
      //console.log('hi');
      const formData = this.form.value;
      //console.log(formData);
      this.categoryService.categoriesAdd(formData.categoryName,formData.categoryImage).subscribe(
        (response) => {
          console.log('Successfully added category:', response);
          this.router.navigateByUrl('category');
          // Reset form after successful submission
          this.form.reset();
        },
        (error) => {
          console.error('Error adding category:', error);
        }
      );
    }
  }

      
 CheckCategoryExist():ValidatorFn {
  return (control: AbstractControl): {[key: string]: boolean}|null=> {
    if(!control.value){
      return null;
    }
    
     console.log(control.value)
     return this.categoryName.find((x: any) => x.categoryName.toLowerCase() == control.value.toLowerCase())
     ? { CheckCategoryExists: true }: null;
    
   
  }
}
}
