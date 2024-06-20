import { Injectable } from '@angular/core';
import { CommunicationService } from '@core/services/communication.service';
import { UserAPI } from '@shared/constants/api-endpoints/user-api.const';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  sid!:number;
  constructor(private communicationservice:CommunicationService){ }

  getSuppliers(): Observable<any>{
    return this.communicationservice.get<any>(UserAPI.getSuppliers(),null,'Loading',true,false);
  }
  addSuppliers(name:any,address: any, productId: number, quantity: number): Observable<any>{
      const requestBody={supplierName:name, address:address, productId:productId, quantity:quantity};
      return this.communicationservice.post<any>(UserAPI.addSuppliers(), requestBody,null,'Loading',true);
  }
  suppliersEdit(id:number): Observable<any>{
    return this.communicationservice.get<any>(UserAPI.getEmployeeById(id),null,'Loading',true,false);
  }
  updateSuppliers(id:number,name:any,address: any, productId: number, quantity: number): Observable<any>{
    const requestBody={supplierId:id,supplierName:name, address:address, productId:productId, quantity:quantity};
    return this.communicationservice.post<any>(UserAPI.updateSuppliers(), requestBody,null,'Loading',true);
}

deleteSuppliers(id:number): Observable<any>{
  return this.communicationservice.delete<any>(UserAPI.deleteSuppliers(id),null,'Loading',true);
}
getSupplierByName(name: string): Observable<any>{
  return this.communicationservice.get<any>(UserAPI.getSuppliersByName(name),null,'Loading',true,false);
}
}
