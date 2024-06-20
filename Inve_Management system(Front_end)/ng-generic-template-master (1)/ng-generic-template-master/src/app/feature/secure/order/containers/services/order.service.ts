import { Injectable } from '@angular/core';
import { CommunicationService } from '@core/services/communication.service';
import { UserAPI } from '@shared/constants/api-endpoints/user-api.const';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

 
  getOrders(): Observable<any> {
    return this.communicationservice.get<any>(UserAPI.getOrders(),null,'Loading',true,false);
  }

  addOrders(productId: number,userId: number, quantity:number): Observable<any> {
    const requestBody={productId:productId, userId:userId, quantity:quantity};
    return this.communicationservice.post<any>(UserAPI.addOrders(),requestBody,null,'Loading',true);
  }
  updateOrders(orderId:number,productId: number,userId: number, quantity:number): Observable<any>{
    const requestBody={orderId:orderId,productId:productId, userId:userId, quantity:quantity};
    
    return this.communicationservice.put<any>(UserAPI.updateOrders(),requestBody,null,'Loading',true);
  }
  
  ordersEdit(orderId:number): Observable<any>{
    return this.communicationservice.get<any>(UserAPI.ordersEdit(orderId),null,'Loading',true,false);
  }
  getuserDetails(id:number,date:Date){
    console.log(date)
    return this.communicationservice.get(<any>(UserAPI.getuserDetails(id,date),null,'Loading',true,false))
  }
  constructor(private communicationservice: CommunicationService) { }
}
