import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../../../../Supplier/Containers/dialog/dialog.component';
import { CategoryService } from '../../services/categories.service';

@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrls: ['./deletedialog.component.scss']
})
export class DeletedialogComponent{

  constructor(public dialog: MatDialog,private categoryservice:CategoryService,public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  

  cancel(){
    this.dialogRef.close(); 
    }
  
  delete(){
    console.log(this.data.id);
    //this.supplierservice.deleteSuppliers
   
      this.categoryservice.deleteproduct(this.data.id).subscribe();
      this.dialog.closeAll(); 
  }

}
