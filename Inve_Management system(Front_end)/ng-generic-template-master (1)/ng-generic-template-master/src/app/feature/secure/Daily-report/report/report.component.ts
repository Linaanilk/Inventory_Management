import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { InvoiceService } from '../../Invoice/services/invoice.service';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent extends ComponentBase {
  invoices:any[]=[];
  totalAmount:number=0;
  total=0;
  invo:any[]=[];
  //searchValue:any;
  searchedProduct:any;
  override initVariables(): void {
   
  }
  override subscribeEvents(): void {
    this.invoiceservice.getInvoices().subscribe(list => {
      this.invoices=list;
      console.log('list',list);
      this.invoices.forEach(invoice => {
        // Add the totalAmount of each invoice to the total
        this.total += invoice.totalAmount;
        console.log('Total:', this.total);
      });
    })
    this.invoiceservice.getInvoices().subscribe(list => {
      this.invo=list;
      console.log('list',list);
      // this.invo.forEach(invoice => {
      //   // Add the totalAmount of each invoice to the total
      //   this.total += invoice.totalAmount;
      //   console.log('Total:', this.total);
      // });
    })
   

  }
  override load(): void {
   
  }
  override unload(): void {
    
  }

  constructor(private invoiceservice:InvoiceService) {
    super();
   }
   searchValue: string = '';

  onSearch() {
    this.totalAmount=0;
    console.log('hi');
    console.log('Search Value:', this.searchValue);
    this.searchedProduct=this.invo.filter((x:any)=>x.invoiceDate.includes(this.searchValue));
   console.log('searchedProduct:',this.searchedProduct);
   this.searchedProduct.forEach((invoice:any) => {
    this.totalAmount += invoice.totalAmount;
    console.log('Total:', this.totalAmount);
   });
   if(this.searchedProduct){
    this.invoices=this.searchedProduct;
   }
   else
   {
    this.invoices=this.invo;
   }
  }
 
}
