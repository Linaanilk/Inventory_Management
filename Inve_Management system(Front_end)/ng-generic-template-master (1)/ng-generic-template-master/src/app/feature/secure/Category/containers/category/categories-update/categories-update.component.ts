import { Component } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { CategoryService } from '../../services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, ValidatorFn } from '@angular/forms'; // Import FormBuilder
import { FormBase } from '@shared/contracts'; // Import FormBase

@Component({
  selector: 'app-categories-update',
  templateUrl: './categories-update.component.html',
  styleUrls: ['./categories-update.component.scss']
})
export class CategoriesUpdateComponent extends ComponentBase implements FormBase {
  form!: FormGroup;
  categoryId!: number;
  categoryName!: string;
  categoryImage!: string;
  catName:any[]=[];

  constructor(
    private categoryservice: CategoryService,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder // Inject FormBuilder
  ) {
    super();
  }

  buildForm(): void {
    this.form = new FormGroup({
      //designationId:new FormControl(null,Validators.required),
      categoryName: new FormControl(null,[ Validators.required,this.CheckCategoryExist()]),
      categoryId: new FormControl(null,Validators.required),
      categoryImage: new FormControl(null,Validators.required)
    });
  }

  bindForm(): void {
    // Populate form controls with fetched data
    this.form.patchValue({
      categoryId: this.categoryId,
      categoryName: this.categoryName,
      categoryImage: this.categoryImage
    });
  }

  resetForm(): void {
    this.form.reset();
  }

  override initVariables(): void {
    this.buildForm(); // Initialize form using FormBuilder
  }

  override subscribeEvents(): void {
    this.activatedroute.params.subscribe((params: any) => {
      const id = params['id'];
      this.categoryservice.categoriesEdit(id).subscribe(
        (data) => {
          this.categoryId = data.categoryId;
          this.categoryName = data.categoryName;
          this.categoryImage=data.image;
          this.bindForm(); // Populate form controls with fetched data
        },
        (error) => {
          console.error('Error editing category:', error);
        }
      );
    });
    this.categoryservice.GetCategories().subscribe(list=>{
      this.catName=list;
    })
  }

  onSubmit(): void {
    if (this.form.valid) {
      const updatedCategoryName = this.form.value.categoryName; 
      const updatedCategoryImage = this.form.value.categoryImage;
      const id = this.categoryId;
      this.categoryservice.categoriesUpdate(id, updatedCategoryName,updatedCategoryImage).subscribe(
        () => {
          console.log('Category updated successfully.');
          this.router.navigateByUrl('category');
        },
        error => {
          console.error('Error updating category:', error);
        }
      );
    }
  }

  override load(): void {}

  override unload(): void {}

       
 CheckCategoryExist():ValidatorFn {
  return (control: AbstractControl): {[key: string]: boolean}|null=> {
    if(!control.value){
      return null;
    }
    
     //console.log(control)
    // console.log(this.categoryName)
     console.log(control.value)
     return this.catName.find((x: any) => x.categoryName.toLowerCase() == control.value.toLowerCase())
     ? { CheckCategoryExists: true }: null;
    
   
  }
}
}

