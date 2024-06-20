import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeesService } from '../services/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrls: ['./deletedialog.component.scss']
})
export class DeletedialogComponent {

  constructor(
    private employeeservice: EmployeesService,
    public dialogRef: MatDialogRef<DeletedialogComponent>,
    private router:Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  cancel(): void {
    this.dialogRef.close(); 
  }
  
  delete(): void {
    console.log(this.data.id);
    this.employeeservice.deleteEmployees(this.data.id).subscribe(() => {
     // this.router.navigateByUrl('categories/getproducts/:id');
      //location.reload()
      this.router.navigateByUrl('/employee')
      // Optional: Handle success or error
    });
    this.dialogRef.close(); 
  }
}
