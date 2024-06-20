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
export class DesignationService {

  constructor(
    private communicationService: CommunicationService,
    private router: Router
  ) { }

  designations(): Observable<any> {
    return this.communicationService.get<any>(UserAPI.designations(),null,'Loading',true,false)
    
  }
  designationsid(id:number):Observable<any>{
    return this.communicationService.get<any>(UserAPI.designationsId(id),null,'Loading',true,false)
  }
  designationsAdd(data:any): Observable<any> {
    return this.communicationService.post<any>(UserAPI.designationsAdd(),data,)
    
  }
  designationsEdit(id: number): Observable<any> {
    return this.communicationService.get<any>(UserAPI.designationsId(id));
}
designationsUpdate(id: number, updatedDesignationName: any): Observable<any> {
  const requestBody = { designationId: id, designationName: updatedDesignationName };
  return this.communicationService.put<any>(UserAPI.designationsUpdate(), requestBody);
}




}
