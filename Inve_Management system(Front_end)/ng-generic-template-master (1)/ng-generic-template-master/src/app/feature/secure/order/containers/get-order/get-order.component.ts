import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { OrderService } from '../services/order.service';
import { CustomerService } from '../../../Customer/containers/services/customer.service';
import { CategoryService } from '../../../Category/containers/services/categories.service';
import { Validators, FormGroup, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-get-order',
  templateUrl: './get-order.component.html',
  styleUrls: ['./get-order.component.scss']
})
export class GetOrderComponent extends ComponentBase {

  orders:any[]=[];
  tempOrders:any[]=[];
  products:any;
  customers:any;
  productName:any;
  customerName: any;
  productId!:number;
  customerId!: number;
startDate!: Date;
searchedOrders:any;
searchPerformed: boolean = false; 
  form!: FormGroup;
  currentdate:any;
  createdDate:any;
  

  override initVariables(): void {
    //console.log('angular: ',this.currentDate.getDate());
    //console.log(this.currentdate);

  }
  override subscribeEvents(): void {
    
    
    this.orderservice.getOrders().subscribe(
      (orders: any[]) => {
        // Update orders property
        this.orders = orders;
        this.tempOrders = orders;
        console.log(orders);
       
        
        // Fetch product and customer details for each order
        for (const order of this.orders) {
          this.categoryservice.productsEdit(order.productId).subscribe(
            (product: any) => {
          
              order.productName = product.name;
            },
            (productError: any) => {
              console.error(`Error fetching product for order ${order.id}:`, productError);
              
            }
          );
  
          this.customerservice.customersEdit(order.userId).subscribe(
            (customer: any) => {
            
              order.customerName = customer.userName;
            },
            (customerError: any) => {
              console.error(`Error fetching customer for order ${order.id}:`, customerError);
              
            }
          );
        }
      },
      (ordersError: any) => {
        console.error('Error fetching orders:', ordersError);
        
      }
    );
    
    this.customerservice.getCustomers().subscribe(list=>{
      this.customers=list;
      console.log(this.customers)
  })
  
  }

  override load(): void {
    this.buildform();
  }
  buildform(){
    this.form = new FormGroup({
     
      customerId: new FormControl(null, Validators.required),
      startDate: new FormControl(null,[Validators.required,this.checkDate()])
    
    });
  }
  override unload(): void {
   
  }

  constructor(private orderservice:OrderService,private customerservice:CustomerService, private categoryservice:CategoryService,private datepipe:DatePipe) {
    
    super();
   const date = new Date();
    this.currentdate =  this.datepipe.transform( date,'yyyy-MM-ddT00:00:00');
    console.log(this.currentdate);
    
  }



onSubmit() {
  const userId = +this.form.get('customerId')?.value;
  const searchDate = this.form.get('startDate')?.value;
  console.log(typeof searchDate);
  console.log(typeof this.tempOrders[0].createdDate);
  // Perform search with userId and searchDate
  console.log("User ID:", userId);
  console.log("Search Date:", searchDate);
  var data=this.tempOrders.filter((x:any)=>x.userId==userId && x.createdDate.includes(searchDate));
  console.log(data);
  if(data){
    this.orders=data;
  }
  else{
    alert("No orders found");
  }

  
}

checkDate(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (!control.value) {
      return null; // Return null if the value is null or empty
    }

    const selectedDate = new Date(control.value);
    const currentDate = new Date();

    
    if (selectedDate > currentDate) {
      return { checkDate: true }; // Return an error if the selected date is greater than today
    }

    

    return null; 
  };
}

 

}
