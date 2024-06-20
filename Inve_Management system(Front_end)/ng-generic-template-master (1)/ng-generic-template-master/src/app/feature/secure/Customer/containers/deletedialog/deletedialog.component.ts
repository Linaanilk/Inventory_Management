import { Component, Inject, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../../../Supplier/Containers/dialog/dialog.component';

@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrls: ['./deletedialog.component.scss']
})
export class DeletedialogComponent {

  constructor(public dialog: MatDialog,private customerservice:CustomerService,public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  

  cancel(){
    this.dialogRef.close(); 
    }
  
  delete(){
    console.log(this.data.id);
    //this.supplierservice.deleteSuppliers
   
      this.customerservice.deleteShops(this.data.id).subscribe();
      this.dialog.closeAll(); 
  }

}
