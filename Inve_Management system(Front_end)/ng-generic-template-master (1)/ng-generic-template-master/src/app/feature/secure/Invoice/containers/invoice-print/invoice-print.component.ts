import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ComponentBase } from '@shared/abstracts/component-base';

@Component({
  selector: 'app-invoice-print',
  templateUrl: './invoice-print.component.html',
  styleUrls: ['./invoice-print.component.scss']
})
export class InvoicePrintComponent extends ComponentBase {
  invoiceDetails:any;
  userDetails:any[]=[];
  date:any;
  invoices:any;
  override initVariables(): void {
   
  }
  override subscribeEvents(): void {
   
  }
  override load(): void {
    
  }
  override unload(): void {
    
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    super();
    this.invoiceDetails=data.invoice;
   this.userDetails=data.user;
   this.date=data.date;
   
   this.invoices=data.invoices;
   
    
  }

 
  print() {
    let printContents = document.getElementById('print')!.innerHTML;
    let popupWin = window.open('', '_blank');
    if (popupWin) {
      popupWin.document.open();
      popupWin.document.write(`
        <html>
          <head>
            <title></title>
            <style>
            body {
              font-family: 'Arial', sans-serif;
            }
            table {
              width: 100%;
              border-collapse: collapse;
            }
            th, td {
              border-bottom: 1px solid black;
              padding: 15px;
              text-align: left;
            }
            th, td {
              padding: 15px;
              text-align: left;
            }
            h1 {
              text-align: center;
            }
            </style>
          </head>
          <body onload="window.print();window.close()">
          <h1>InveLabs</h1>
          ${printContents}
          </body>
        </html>`
      );
      popupWin.document.close();
    }
  }
}
