import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentBase } from '@shared/abstracts/component-base';
import { FormBase } from '@shared/contracts';
import { SupplierService } from '../services/supplier.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../Category/containers/services/categories.service';

@Component({
  selector: 'app-insert-suppliers',
  templateUrl: './insert-suppliers.component.html',
  styleUrls: ['./insert-suppliers.component.scss']
})
export class InsertSuppliersComponent extends ComponentBase implements FormBase {

  form!:FormGroup;
  supplierId!: number;
  productId!:any;
  supplierName:any;
  formData:any;
  quantity!:number;
  address:any;
  data:any;
  productName:any;
  catName:any;
  categoryName: any;
  name:any;

  categoryId!:number;
  override initVariables(): void {
    
  }
  override subscribeEvents(): void {
    this.activatedroute.params.subscribe((params: any) => {
        const supplierId = +params['supplierId']; // Convert to number if needed
       // console.log('Supplier ID:', supplierId);

        this.supplierservice.suppliersEdit(supplierId).subscribe(
            (data) => {
                console.log('hi');
                
                this.supplierId = data.supplierId;
                this.supplierName = data.supplierName;
                this.address = data.address;
                this.quantity = data.quantity;
                this.productId = data.productId;

                // Assuming productsEdit returns an Observable
                this.categoryservice.productsEdit(this.productId).subscribe(productData => {
                    
                    if (this.supplierId != null) {
                        this.loadSupplier();
                    }
                });
            },
            (error) => {
                console.error('Error editing product:', error);
            }
        );
    });

    // Subscription for categories
    this.categoryservice.categories().subscribe(list => {
        this.catName = list;
        //console.log(this.categoryName);
    });
}


  override load(): void {
    this.buildForm();
  }
  override unload(): void {
   
  }
  onSubmit()
  {
      this.formData=this.form.value;
      if(this.supplierId)
        {
          this.supplierservice.updateSuppliers(this.supplierId,this.formData.supplierName,this.formData.address,this.formData.productId,this.formData.quantity).subscribe(
            (response) => {
             
              //console.log('Supplier updated successfully:', response);
              this.router.navigateByUrl('supplier');
              this.form.reset();
    
          },
          (error) => {
  
              console.error('Error updating supplier:', error);
             
          }
          );
        }
        else
        {
          this.supplierservice.addSuppliers(this.formData.supplierName,this.formData.address,this.formData.productId,this.formData.quantity).subscribe(
            (response) => {
             
              //console.log('Supplier added successfully:', response);
              this.router.navigateByUrl('supplier');
              this.form.reset();
    
          },
          (error) => {
              console.error('Error adding supplier:', error);
              
          }
          );
        }
     
  }

  constructor(private supplierservice: SupplierService,private activatedroute: ActivatedRoute,private categoryservice: CategoryService,private router:Router) {
    super();
  }
  buildForm(): void {
    this.form = new FormGroup({
      supplierId:new FormControl('0',Validators.required),
      supplierName: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      quantity: new FormControl(null, [Validators.required,Validators.min(50)]),
      categoryId: new FormControl(null, Validators.required),
      productId: new FormControl(null,Validators.required)
    });

    this.form.get('categoryId')?.valueChanges.subscribe(categoryId => {
      if (categoryId) {
        // Fetch products based on the selected category
        this.categoryservice.getproducts(categoryId).subscribe((products: any[]) => {
          this.productName = products;
        });
      }
    });

  }
  bindForm(): void {
  
    
  }

  loadSupplier(): void {
    // Assuming productsEdit returns an Observable
    this.categoryservice.productsEdit(this.productId).subscribe(productData => {
      
        this.form.patchValue({
          supplierName: this.supplierName,
          address: this.address,
          quantity: this.quantity,
          //productName: this.productName
      });
      
      // Set the value of categoryControl separately
      this.form.get('categoryId')!.setValue(productData.categoryId);
      this.form.get('productId')!.setValue(productData.productId);
      
      
    });
}


  resetForm(): void {
   
  }
 

 

}
