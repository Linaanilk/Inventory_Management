import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentBase } from '@shared/abstracts/component-base';
import { FormBase } from '@shared/contracts';
import { CategoryService } from '../../services/categories.service';

@Component({
  selector: 'app-insert-products',
  templateUrl: './insert-products.component.html',
  styleUrls: ['./insert-products.component.scss']
})
export class InsertProductsComponent extends ComponentBase implements FormBase {

  form!: FormGroup;
  id!: number;
  catid!: number;
  productId!: number;
  productName!: any;
  unitPrice!: number;
  productDescription!: any;
  data: any;
  productImage: any;
  prodName: any[] = [];
  productsName: any[] = [];
  constructor(private categoryService: CategoryService, private router: Router, private activatedRoute: ActivatedRoute) {
    super();
  }
  bindForm(): void {

  }
  resetForm(): void {
    this.form.reset();
  }

  override initVariables(): void {
    // Initialize variables if needed
  }

  override subscribeEvents(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.id = +params['id'];
      console.log('id:',this.id);
    });

    this.activatedRoute.params.subscribe((params: any) => {
      this.catid = +params['catid'];
      console.log(this.catid);

      this.productId = +params['productid'];
      console.log(this.productId);
      if (this.productId) {
        this.categoryService.productsEdit(this.productId).subscribe(
          (data) => {
            this.productId = data.productId; // Assuming productId is returned by productsEdit
            this.productName = data.productName; // Assuming productName is returned by productsEdit
            this.unitPrice = data.unitPrice; // Assuming unitPrice is returned by productsEdit
            this.productDescription = data.productDescription; // Assuming productDescription is returned by productsEdit
            this.productImage = data.image
            this.bindForm(); // Populate form controls with fetched data
            console.log(data);
          },
          (error) => {
            console.error('Error editing product:', error);
          }
        );
      }
      if (this.productId) {
        this.loadProduct();
      }
    });
    if (this.id) {
      console.log('catid', this.catid)
      this.categoryService.getproducts(this.id).subscribe(list => {
        this.prodName = list;
        this.prodName.forEach(element => {
          this.productsName.push(element.name)
        });
        console.log('prodName', this.productsName)
      })
    }
  }

  override load(): void {
    this.buildForm();
  }

  override unload(): void {
    // Clean up or unsubscribe from events if needed
  }

  buildForm(): void {
    this.form = new FormGroup({
      productId: new FormControl('0', Validators.required),
      productName: new FormControl(null, [Validators.required, this.CheckProductExits.bind(this)]),
      unitPrice: new FormControl(null, [Validators.required, Validators.min(5)]),
      productDescription: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      productImage: new FormControl(null, Validators.required)
    });

  }

  onSubmit(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      if (this.productId) {
        // If productId exists, update the product
        this.categoryService.updateProduct(this.productId, formData.productName, this.catid, formData.unitPrice, formData.productDescription, formData.productImage).subscribe(
          (response) => {
            console.log('Successfully updated product:', response);
            this.router.navigate(['/category/categories/getproducts', this.catid]); // Use the correct route path
          },
          (error) => {
            console.error('Error updating product:', error);
          }
        );
      } else {
        // If productId doesn't exist, insert a new product
        this.categoryService.addproducts(formData.productName, formData.unitPrice, formData.productDescription, this.id, formData.productImage).subscribe(
          (response) => {
            console.log('Successfully added product:', response);
            this.router.navigate(['/category/categories/getproducts', this.id]); // Use the correct route path
          },
          (error) => {
            console.error('Error adding product:', error);
          }
        );
      }

      // Reset form after submission
      this.form.reset();
    }
  }

  loadProduct() {
    // Load product data from service based on productId
    this.categoryService.productsEdit(this.productId).subscribe((product) => {
      this.form.patchValue({
        productId: product.productId,
        productName: product.name,
        unitPrice: product.unitPrice,
        productDescription: product.productDescription,
        productImage: product.image
      });
    });
  }

  //  CheckProductExist():ValidatorFn {
  //   return (control: AbstractControl): {[key: string]: boolean}|null=> {
  //     if(!control.value){
  //       return null;
  //     }
  //     else if(!this.id)
  //       {
  //         console.log(control)
  //     this.categoryService.getproducts(this.catid).subscribe(list=>{
  //       this.prodName=list;
  //       console.log(this.prodName)
  //     })
  //      //console.log(control)
  //     console.log('prod: ',this.prodName)
  //    //  console.log(control.value)
  //      return this.prodName.includes((x: any) => x.name.toLowerCase() == control.value.toLowerCase())
  //      ? { CheckProductExists: true }: null;
  //   }
  //   else{
  //     return null;
  //   }


  // }
  // }
  CheckProductExits(control: AbstractControl): ValidationErrors | null {
    console.log(this.productId)
    console.log('productsNameeeee: ', this.productsName)
    if (control.value && !this.productId) {

      if (this.productsName.includes(control.value.toLowerCase())) {
        return { CheckProductExits: true };
      }
      else {
        control.setErrors(null);
        return null;
      }
    }
    else {
      return null
    }
  }

}






