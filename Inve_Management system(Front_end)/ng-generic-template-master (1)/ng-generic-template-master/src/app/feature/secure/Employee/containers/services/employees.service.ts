import { Injectable } from '@angular/core';
import { CategoryService } from '../../../Category/containers/services/categories.service';
import { Observable } from 'rxjs';
import { UserAPI } from '@shared/constants/api-endpoints/user-api.const';
import { CommunicationService } from '@core/services/communication.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private communicationservice:CommunicationService) { }

  getEmployees(): Observable<any>
  {
      return this.communicationservice.get<any>(UserAPI.getEmployees(),null,'Loading',true,false)
  }
  updateEmployee(id:number,employeeName:any,designationId:number,dob:Date,email:any,password:any,employeeImage:any): Observable<any>
  {
    console.log('hi');
    console.log(id);
    const requestBody = {employeeId:id,name:employeeName,designationId: designationId, dob:dob,  email: email,password:password,image:employeeImage}
      return this.communicationservice.put<any>(UserAPI.updateEmployee(id),requestBody,null,'Loading',true);
  }
  getEmployeesById(id:number): Observable<any>
  {
      return this.communicationservice.get<any>(UserAPI.getEmployeesById(id),null,'Loading',true,false);
  }
  
  addEmployees(id:number,employeeName:any,designationId:number,dob:Date,email:any,password:any,employeeImage:any): Observable<any>
  {
    const requestBody = {employeeId:id,name:employeeName,designationId: designationId, dob:dob, email: email,password:password, image:employeeImage}
    return this.communicationservice.post<any>(UserAPI.addEmployees(),requestBody,null,'Loading',true);
  }
  deleteEmployees(id:number): Observable<any>
  {
      return this.communicationservice.delete<any>(UserAPI.deleteEmployee(id),null,'Loading',true);
  }
  getEmployeeByName(name:string): Observable<any>
  {
    return this.communicationservice.get<any>(UserAPI.getEmployeeByName(name),null,'Loading',true,false);
  }
  changeEmployeePassword(email:any,oldpassword:any,newPassword:any): Observable<any>
  {
    const requestBody = {email:email,OldPassword:oldpassword,NewPassword:newPassword}
    return this.communicationservice.post<any>(UserAPI.changeEmployeePassword(),requestBody,null,'Loading',true);
  }
}
