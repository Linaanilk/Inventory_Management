import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { EmployeesService } from '../services/employees.service';
import { Router } from '@angular/router';
import { DeletedialogComponent } from '../deletedialog/deletedialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent extends ComponentBase {

  id!: number;
  employees: any[]=[];
  searchedProduct:any[]=[];
  emp:any[]=[];

  override initVariables(): void{
   
  }
  override subscribeEvents(): void {
    this.employeeservice.getEmployees().subscribe(list=>{
      this.employees=list;
      //console.log(this.employees);
    })
    this.employeeservice.getEmployees().subscribe(list=>{
      this.emp=list;
      //console.log('searchedProduct: ',this.searchedProduct);
    })
    
  }
  override load(): void {
    
  }
  override unload(): void {
   
  }
  delete(id: number): void {
   // console.log(id);
    const res=this.dialog.open(DeletedialogComponent, {
      data: { id: id }
    });
    res.afterClosed().subscribe(()=>{this.subscribeEvents()})
    
    
  }
  
  constructor(private employeeservice: EmployeesService, private router:Router,private dialog: MatDialog) {
    super();
  }

  
  searchValue: string = '';

  onSearch() {
    //console.log('hi');
   // console.log('Search Value:', this.searchValue);
    this.searchedProduct=this.emp.filter((x:any)=>x.name.toLowerCase().includes(this.searchValue?.toLowerCase()));
    console.log('s',this.searchedProduct)
    if(this.searchedProduct){
      this.employees=this.searchedProduct;
    }
    else{
      this.employees=this.emp;
    }
    
  }

}
