import { Injectable } from '@angular/core';
import { CommunicationService } from '@core/services/communication.service';
import { UserAPI } from '@shared/constants/api-endpoints/user-api.const';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  getCustomers(): Observable<any>{
    return this.communicationservice.get<any>(UserAPI.getCustomers());
  }
  addShops(userName:any, address:any): Observable<any>{
    const requestBody={userName:userName, address:address}
    return this.communicationservice.post<any>(UserAPI.addShops(),requestBody,null,'loading',true);
  }
  updateShops(userId:number,userName:any, address:any): Observable<any>{
    const requestBody={userId:userId,userName:userName, address:address}
    return this.communicationservice.put<any>(UserAPI.updateShops(),requestBody,null,'loading',true);
  }
  customersEdit(id:number) : Observable<any>{
    return this.communicationservice.get<any>(UserAPI.getShopsById(id),null,'loading',true,false);
  }
  deleteShops(id:number){
    return this.communicationservice.delete<any>(UserAPI.deleteShops(id), null, 'loading', true);
  }
  getCustomersByName(name: string): Observable<any>{
    return this.communicationservice.get<any>(UserAPI.getCustomersByName(name),null,'loading',true,false)
  }
  constructor(private communicationservice: CommunicationService) { }
}
