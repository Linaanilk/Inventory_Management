//import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserAPI } from '@shared/constants/api-endpoints/user-api.const';
import { Observable, of, tap } from 'rxjs';

import { Injectable } from '@angular/core';
import { AppConfig } from '@core/configs';
import { CommunicationService } from '@core/services/communication.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private communicationService: CommunicationService,
    private router: Router
  ) { }


  categories(): Observable<any> {
    return this.communicationService.get<any>(UserAPI.categories(),null,'Loading',true,false)
  }
  categoriesId(id:number): Observable<any> {
    return this.communicationService.get<any>(UserAPI.categoriesId(id),null,'Loading',true,false)
  }
  getproducts(id:number): Observable<any>{
    return this.communicationService.get<any>(UserAPI.getproducts(id),null,'Loading',true,false)
  }
  getEveryProductsById(id:number):Observable<any>{
    return this.communicationService.get<any>(UserAPI.getEveryProductById(id),null,'Loading',true,false)
  }
  categoriesAdd(categoryName:any,image:any): Observable<any> {
   const requestBody={categoryName:categoryName,image:image}
    return this.communicationService.post<any>(UserAPI.categoriesAdd(),requestBody,null,'Loading',true)
    
  }
  categoriesEdit(id: number): Observable<any> {
    return this.communicationService.get<any>(UserAPI.categoriesId(id),null,'Loading',true,false);
}
   categoriesUpdate(id: number, updatedCategoryName: any, updatedCategoryImage:any): Observable<any> {
  const requestBody = { categoryId: id, categoryName: updatedCategoryName, image:updatedCategoryImage };
  return this.communicationService.put<any>(UserAPI.categoriesUpdate(), requestBody,null,'Loading',true);
}
productsEdit(id: number): Observable<any> {
  return this.communicationService.get<any>(UserAPI.productsId(id),null,'Loading',true,false);
}
addproducts(productName: any,unitPrice:number, productDescription:any, id:number, productImage:any){
  const requestBody = { name:productName, categoryId:id, unitPrice:unitPrice, productDescription:productDescription, image:productImage};
  return this.communicationService.post<any>(UserAPI.addproducts(), requestBody,null,'Loading',true);
}
deleteproduct(id:number){
  return this.communicationService.delete<any>(UserAPI.deleteproduct(id),null,'Loading',true);
}
updateProduct(productId:number, productName:any, id:number,unitPrice:number, productDescription:any, productImage:any){
    const requestBody = {productId: productId, name:productName, categoryId:id,unitPrice:unitPrice, productDescription:productDescription, image:productImage};
    return this.communicationService.post<any>(UserAPI.updateproducts(), requestBody,null,'Loading',true)
}
GetProductByName(name: string): Observable<any> {
  return this.communicationService.get<any>(UserAPI.GetProductByName(name),null,'Loading',true,false);
}
GetTotalProductQuantity(): Observable<any>{
  return this.communicationService.get<any>(UserAPI.GetTotalProductQuantity(),null,'Loading',true,false);
}
GetOutOfStockProduct(): Observable<any> {
  return this.communicationService.get<any>(UserAPI.GetOutOfStockProduct(),null,'Loading',true,false);
}
GetCategories(): Observable<any> {
  return this.communicationService.get<any>(UserAPI.GetCategories(),null,'Loading',true,false);
}
getProductCountFromCategory(id:number): Observable<any>{
  return this.communicationService.get<any>(UserAPI.getProductCountFromCategory(id),null,'Loading',true,false)
}
getProductQtyFromCategory(): Observable<any>{
  return this.communicationService.get<any>(UserAPI.getProductQtyFromCategory(),null,'Loading',true,false)
}
GetAllProducts(): Observable<any>{
  return this.communicationService.get<any>(UserAPI.GetAllProducts(),null,'Loading',true,false)
}
}