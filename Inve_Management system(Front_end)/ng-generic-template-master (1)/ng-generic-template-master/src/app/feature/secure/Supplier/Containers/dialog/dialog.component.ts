import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SupplierService } from '../services/supplier.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(public dialog: MatDialog,private supplierservice:SupplierService,public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  

  cancel(){
    this.dialogRef.close(); 
    }
  
  delete(){
    console.log('delete');
    //this.supplierservice.deleteSuppliers
   
      this.supplierservice.deleteSuppliers(this.data.id).subscribe();
      this.dialogRef.close(); 
  }
}


 


