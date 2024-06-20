import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { InvoiceService } from '../../services/invoice.service';
import { OrderService } from '../../../order/containers/services/order.service';
import { CustomerService } from '../../../Customer/containers/services/customer.service';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormBase } from '@shared/contracts';
import { InvoicePrintComponent } from '../invoice-print/invoice-print.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-get',
  templateUrl: './invoice-get.component.html',
  styleUrls: ['./invoice-get.component.scss']
})
export class InvoiceGetComponent extends ComponentBase implements FormBase{

  invoices:any[]=[];
  // invoiceData!:{invoiceId:number,userId:number,totalAmount:number,createdDate:Date,userName:string,address:string}
  details:any;
  userId!:number;
  customers:any[]=[];
  order:any[]=[];
  form!:FormGroup;
  customerId!:number;
  customerDetails:any[]=[];
  formData:any;
  invoiceDetails:any;
  userDetails:any;
  userName:any;

  override initVariables(): void {
    
  }
  override subscribeEvents(): void {
    this.customerservice.getCustomers().subscribe(list => {
      this.details = list;
    })
     
    
    
    console.log('hi');
    this.invoiceService.getInvoices().subscribe(list => {
      this.invoices=list
      console.log('list',list);
     
      });
    
    
    
    this.customerservice.getCustomers().subscribe(list=>{
        this.customers=list;
        console.log(this.customers)
    })
    this.orderservice.getOrders().subscribe(list=>{
      console.log(list);
      this.order=list;
    })
    this.customerservice.getCustomers().subscribe(list=>{
      this.customers=list;
      console.log(this.customers)
    })
  }
  override load(): void {
    this.buildForm();
  }
  override unload(): void {
   
  }

   
  // searchValue: string = '';

  // onSubmit() {
  //   console.log('hi');
  //   console.log('Search Value:', this.searchValue);
  //   this.searchValue = '';
  // }

  constructor(private invoiceService:InvoiceService,private orderservice: OrderService,
    private dialog:MatDialog, private customerservice:CustomerService, private router:Router) {
    super();
  }
  buildForm(): void {
    
    this.form = new FormGroup({
     
      customerId: new FormControl(null, Validators.required)
    });

   
  }
  
  
  bindForm(): void {
    
  }
  resetForm(): void {
    
  }
  onSubmit(): void {
    const customerId = +this.form.get('customerId')?.value;
    if (customerId) {
      console.log(customerId)
     this.invoiceService.addInvoices(customerId).subscribe(list=>{
       console.log(list);
       this.subscribeEvents();
       //this.router.navigate(['/invoice']);
       
       
      })
  }}

  openModal(UserId:number,invoiceDate:string,invoice:any): void {
    console.log('UserId:',UserId);
    console.log('invoiceDate:',invoiceDate);
    console.log(typeof invoiceDate);
    console.log(this.order[0].createdDate);
      console.log(this.order)
       this.invoiceDetails=this.order.filter((x:any)=>x.userId==UserId && x.createdDate.includes(invoiceDate.split('T')[0]));
      console.log('invoiceDet:',this.invoiceDetails);
     // console.log(list.createdDate);
      this.userDetails=this.customers.filter((x:any)=>x.userId==UserId);
      console.log('UserDetails:',this.userDetails);

   
     const dialogRef = this.dialog.open(InvoicePrintComponent ,{
      data: {
          invoice: this.invoiceDetails,
         
          user: this.userDetails,
          date:invoiceDate,
          invoices:invoice
      }
  });
// })
// })
  }
  
   
}



