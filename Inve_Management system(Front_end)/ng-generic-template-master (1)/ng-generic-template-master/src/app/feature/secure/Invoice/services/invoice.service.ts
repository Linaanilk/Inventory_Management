import { Injectable } from '@angular/core';
import { CommunicationService } from '@core/services/communication.service';

import { UserAPI } from '@shared/constants/api-endpoints/user-api.const';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  
  
  constructor(private communicationservice:CommunicationService) {}

  getInvoices(): Observable<any>
  {
      return this.communicationservice.get<any>(UserAPI.getInvoices(),null,'Loading',true,false);
  }
  addInvoices(userId:number): Observable<any>
  {
    console.log(typeof(userId))
      return this.communicationservice.post<any>(UserAPI.addInvoice(),{invoiceId:0,userId:userId},null,'Loading',true);
  }
  getInvoiceById(id:number): Observable<any>{
    return this.communicationservice.get<any>(UserAPI.getInvoiceById(id),null,'Loading',true,false);
  }


}
