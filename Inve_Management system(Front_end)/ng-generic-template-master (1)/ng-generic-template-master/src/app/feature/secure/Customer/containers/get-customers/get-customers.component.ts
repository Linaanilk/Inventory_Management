import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentBase } from '@shared/abstracts/component-base';
import { CustomerService } from '../services/customer.service';
import { MatDialog } from '@angular/material/dialog';
import { DeletedialogComponent } from '../deletedialog/deletedialog.component';

@Component({
  selector: 'app-get-customers',
  templateUrl: './get-customers.component.html',
  styleUrls: ['./get-customers.component.scss']
})
export class GetCustomersComponent extends ComponentBase {

 
  customers:any[]=[];
  searchedProduct:any;
  cust:any[]=[];

  override initVariables(): void {
   
  }
  override subscribeEvents(): void {
      this.customerservice.getCustomers().subscribe(list=>{
        this.customers=list;
        //console.log(list);
      }
      );
      this.customerservice.getCustomers().subscribe(list=>{
        this.cust=list;
        //console.log('searchedProduct: ',this.searchedProduct);
      })
  }
  override load(): void {
   
  }
  override unload(): void {
    
  }

  constructor(private router:Router,private customerservice:CustomerService,private dialog:MatDialog) {
    super();
  }

  Delete(id:number){
    const res=this.dialog.open(DeletedialogComponent,{data:{id:id}});
    res.afterClosed().subscribe(()=>{this.subscribeEvents()})
    //res.afterClosed().subscribe(()=>{this.subscribeEvents()});

  }
 
  
  searchValue: string = '';

  onSearch() {
    console.log('hi');
    console.log('Search Value:', this.searchValue);
    this.searchedProduct=this.cust.filter((x:any)=>x.userName.toLowerCase().includes(this.searchValue?.toLowerCase()));
   console.log('searchedProduct:',this.searchedProduct);
   if(this.searchedProduct){
    this.customers=this.searchedProduct;
   }
   else
   {
    this.customers=this.cust;
   }
  }


}
