import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { DesignationService } from '../../services/designations.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-designations',
  templateUrl: './designations.component.html',
  styleUrls: ['./designations.component.scss']
})
export class DesignationsComponent extends ComponentBase {
  designations: any[] = [];
  
  override initVariables(): void {
  }
  override subscribeEvents(): void {
    this.designationservice.designations().subscribe(list=>{
    
      this.designations=list;

      //console.log('Received designations:', this.designations);
    })
  }
  override load(): void {
  }
  override unload(): void {
  }

  EditDesignation(designationId: number): void {
    this.designationservice.designationsid(designationId);
  }
  constructor(private designationservice:DesignationService,private dialog:MatDialog) { 
    super()
  }

  

}
