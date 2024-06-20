import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { CategoryService } from '../../services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeletedialogComponent } from '../deletedialog/deletedialog.component';

@Component({
  selector: 'app-getproducts',
  templateUrl: './getproducts.component.html',
  styleUrls: ['./getproducts.component.scss']
})
export class GetproductsComponent extends ComponentBase {
  id!:number;
  products: any[]=[];
  formGroup:any;
  searchedProduct:any;
  prod:any[]=[];
  override initVariables(): void {
    
  }
  override subscribeEvents(): void {
      this.activatedroute.params.subscribe((params:any)=>
      this.id= params['id'])
     console.log(this.id)
      
      this.categoryservice.getproducts(this.id).subscribe(list=>{
        this.products=list;
        console.log(list);
      });

      this.categoryservice.getproducts(this.id).subscribe(list=>{
        this.prod=list;
        console.log('prod: ',this.prod);
      })
      
  }

  delete(id: number): void {
    console.log(id);
    const res=this.dialog.open(DeletedialogComponent,{data:{id:id}});
    res.afterClosed().subscribe(()=>{this.subscribeEvents()});

  }
  
  override load(): void {
   
  }
  override unload(): void {
   
  }

  constructor(private categoryservice:CategoryService, private activatedroute:ActivatedRoute, private router:Router,private dialog: MatDialog) {
    super();
  }

  
  searchValue: string = '';

  onSearch() {
    console.log('hi');
    console.log('Search Value:', this.searchValue);
    console.log('prod:',this.prod)
    this.searchedProduct=this.prod.filter((x:any)=>x.name.toLowerCase().includes(this.searchValue?.toLowerCase()));
    console.log(this.searchedProduct)
     if(this.searchedProduct){
       this.products=this.searchedProduct;
     }
     else{
       this.products=this.prod;
     }
  
         console.log('searchedproduct',this.searchedProduct);
    // })
  }

 


}
