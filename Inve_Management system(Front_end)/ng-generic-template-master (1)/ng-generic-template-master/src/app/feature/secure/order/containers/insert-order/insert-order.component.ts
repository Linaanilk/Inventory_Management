import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentBase } from '@shared/abstracts/component-base';
import { FormBase } from '@shared/contracts';
import { OrderService } from '../services/order.service';
import { CategoryService } from '../../../Category/containers/services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../../Customer/containers/services/customer.service';

@Component({
  selector: 'app-insert-order',
  templateUrl: './insert-order.component.html',
  styleUrls: ['./insert-order.component.scss']
})
export class InsertOrderComponent extends ComponentBase implements FormBase {

  form!:FormGroup;
  UserId!:number;
  userName:any;
  productId!:number;
  productName:any;
  quantity!:number;
  formData:any;
  customers:any[]=[];
  catName:any[]=[];
  orderId!:number;
  data:any;
  qty!:number;

  override initVariables(): void {
   
  }
  override subscribeEvents(): void {
    this.activatedroute.params.subscribe((params: any) => {
      this.orderId = +params['orderId'];
      console.log(this.orderId);
    });
    this.customerservice.getCustomers().subscribe(
      (customers) => {
        this.customers = customers;
        console.log(this.customers);
      }
    )
    this.categoryservice.categories().subscribe(list => {
      this.catName = list;
      //console.log(this.categoryName);
  });
  this.orderservice.ordersEdit(this.orderId).subscribe(
    (data) => {
      console.log('hello');
      console.log(this.orderId);
      this.productId = data.productId; // Assuming productId is returned by productsEdit
      this.UserId = data.userId; // Assuming productName is returned by productsEdit
      this.quantity = data.quantity; // Assuming unitPrice is returned by productsEdit
    
      this.bindForm(); // Populate form controls with fetched data
      console.log(data);
    },
    (error) => {
      console.error('Error editing product:', error);
    }
  );
  if(this.orderId)
    {
      this.loadOrder();
    }
  }
  override load(): void {
    this.buildForm();
  }
  override unload(): void {
    
  }
onSubmit()
{
  this.formData=this.form.value;
  console.log(this.formData);
  if(this.orderId)
    {
      console.log('ord',this.orderId);
      console.log('prod',this.formData.productId);  
      console.log('user',this.formData.userId);
      console.log('qty',this.formData.quantity);
        this.orderservice.updateOrders(this.orderId,this.formData.productId,this.formData.userId,this.formData.quantity).subscribe(
          (response) => {
            console.log(response)
            console.log('Order updated successfully:', response);
            this.router.navigateByUrl('order');
            this.form.reset();
  
        },
        (error) => {
            console.error('Error adding Orders:', error);
            
        }
        )
    }
    else
    {
      this.orderservice.addOrders(this.formData.productId,this.formData.userId,this.formData.quantity).subscribe(
        (response) => {
         
          console.log('Order added successfully:', response);
          this.router.navigateByUrl('order');
          this.form.reset();

      },
      (error) => {
          console.error('Error adding Orders:', error);
          
      }
      );
    }
     
    }



 
  constructor(private orderservice:OrderService,private categoryservice:CategoryService,private router:Router,private customerservice:CustomerService,private activatedroute:ActivatedRoute) {
    super();
  }
  buildForm(): void {
    
      this.form = new FormGroup({
        userId:new FormControl(null,Validators.required),
       // userName: new FormControl(null, Validators.required),
        quantity: new FormControl(null, [Validators.required,this.QtygreaterthanAvailable()]),
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
      this.form.get('productId')?.valueChanges.subscribe((productId=>{
        if(productId){
          this.categoryservice.getEveryProductsById(productId).subscribe((list=>{
            this.qty=list.quantity;
          }))
        }
      }))
  
  }
  bindForm(): void {
    
  }
  resetForm(): void {
    
  }
  loadOrder() {
    // Load order details
    this.orderservice.ordersEdit(this.orderId).subscribe(orderData => {
      this.form.patchValue({
        userId: orderData.userId,
        quantity: orderData.quantity,
        productId: orderData.productId
      });
  
      
      this.categoryservice.productsEdit(orderData.productId).subscribe(productData => {
       
        this.form.patchValue({
         
        });
  
       
        this.form.get('categoryId')!.setValue(productData.categoryId);
      });
    });
  }
  QtygreaterthanAvailable(){
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (!control.value) {
        return null; // Return null if the value is null or empty
      }
      console.log('value:',control.value);
      console.log(this.qty);
     
      if(control.value>this.qty)
        {
         
        return { QtygreaterthanAvailable: true }; 
        }
    
  
      return null; // Return null if the age is 18 or above
    };
  }
}  