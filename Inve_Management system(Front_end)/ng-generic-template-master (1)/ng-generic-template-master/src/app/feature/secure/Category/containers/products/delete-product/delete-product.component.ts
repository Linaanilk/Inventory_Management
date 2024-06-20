import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { CategoryService } from '../../services/categories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent extends ComponentBase {
  override initVariables(): void {
    throw new Error('Method not implemented.');
  }
  override subscribeEvents(): void {
    this.activatedroute.params.subscribe((params:any)=>{
      const id=params['id'];
    })
  }
  override load(): void {
    throw new Error('Method not implemented.');
  }
  override unload(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private categoryservice:CategoryService,private activatedroute:ActivatedRoute) 
  {
    super()
   }

}
