
import { Component } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { CategoryService } from '../../services/categories.service';
import { AppConfig } from '@core/configs';
import { EmployeesService } from '../../../../Employee/containers/services/employees.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent extends ComponentBase {

  categories: any[] = [];
  token!:any;
  
  override initVariables(): void {
    //console.log("hello")
  }
  override subscribeEvents(): void {
    this.categoryservice.categories().subscribe(list=>{
    
      this.categories=list;

      //console.log('Received categories:', this.categories);
    })
  }
  override load(): void {
  }
  override unload(): void {
  }
  EditCategories(categoriesId: number): void
  {
    this.categoryservice.categoriesId(categoriesId);
  }
  constructor(private categoryservice: CategoryService,private employeeservice:EmployeesService) {
    super();
    
    this.token=localStorage.getItem(AppConfig.auth.token)
    this.token=JSON.parse(this.token);

    this.employeeservice.getEmployees().subscribe(data => {
      const role = this.token.role;
    
    })
  
      
   }

   
  }
  

  
  


