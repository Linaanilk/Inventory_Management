import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { SupplierService } from '../services/supplier.service';
import { CategoryService } from '../../../Category/containers/services/categories.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent extends ComponentBase {
  suppliers:any[]=[];
  supplierId!:number;
  searchedProduct:any;
  supplier:any[]=[];
  //id!:number;
  productId!:number;
  editedProductName: string = '';
  override initVariables(): void {
    
  }
  override subscribeEvents(): void {
    this.supplierservice.getSuppliers().subscribe((list: any[]) => {
      this.suppliers = list;
      this.suppliers.forEach((supplier: any) => {
        this.categoryservice.productsEdit(supplier.productId).subscribe(
          (editedProduct: any) => {
            supplier.editedProductName = editedProduct.name;
          },
          (error) => {
            console.log(error);
          }
        );
      });
    });
    this.supplierservice.getSuppliers().subscribe(list=>{
      this.supplier=list;
      
    })
  }
  

  delete(id:number){
    console.log(id);
    //this.supplierservice.deleteSuppliers
    const res=this.dialog.open(DialogComponent, {
      data: { id: id }})
      res.afterClosed().subscribe(()=>{this.subscribeEvents()})
   
  }
  override load(): void {
    
  }
  override unload(): void {
    
  }

   
  searchValue: string = '';

  onSearch() {
   // console.log('hi');
   // console.log('Search Value:', this.searchValue);
   
    this.searchedProduct=this.supplier.filter((x:any)=>x.supplierName.toLowerCase().includes(this.searchValue?.toLowerCase()));
    //console.log(this.searchedProduct);
    if(this.searchedProduct){
      this.suppliers=this.searchedProduct;
    }
    else{
      this.suppliers=this.supplier;
    }
  }
  constructor(private supplierservice:SupplierService,private categoryservice: CategoryService,
    private dialog:MatDialog
  ) {
    super();
  }

 

}
