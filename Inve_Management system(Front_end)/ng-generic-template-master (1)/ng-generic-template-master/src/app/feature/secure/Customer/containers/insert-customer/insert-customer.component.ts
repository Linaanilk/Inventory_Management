import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { FormBase } from '@shared/contracts';
import { CustomerService } from '../services/customer.service';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-insert-customer',
  templateUrl: './insert-customer.component.html',
  styleUrls: ['./insert-customer.component.scss']
})
export class InsertCustomerComponent extends ComponentBase implements FormBase{
  form!:FormGroup;
  userId!:number;
  userName:any;
  address:any;
  override initVariables(): void {
   
  }
  override subscribeEvents(): void {
    this.activatedroute.params.subscribe((params: any) => {
      this.userId = +params['userId'];
      console.log(this.userId);
    });
    this.customerservice.customersEdit(this.userId).subscribe(
      (data) => {
        this.userId = data.userId; 
        this.userName = data.userName; 
        this.bindForm(); 
        console.log(data);
      },
      (error) => {
        console.error('Error editing product:', error);
      }
    );
    if(this.userId)
      {
        this.loadShops();
      }
  }
  override load(): void {
    this.buildForm();
  }
  override unload(): void {
   
  }

  constructor(private customerservice: CustomerService,private router:Router,private activatedroute:ActivatedRoute) {
    super();
  }
  buildForm(): void {
    this.form = new FormGroup({
     // productId:new FormControl('0',Validators.required),
      userName: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
     // productDescription: new FormControl(null, Validators.required)
    });
  }
  bindForm(): void {
   
  }
  resetForm(): void {
   
  }

  onSubmit(): void {
    const formData = this.form.value;
    console.log(formData);
   // console.log('hi');
   if(this.userId)
    {
      this.customerservice.updateShops(this.userId,formData.userName, formData.address).subscribe(
        (response) => {
          console.log('Successfully added shops:', response);
          this.router.navigate(['customer']);
        },
        (error) => {
          console.error('Error adding shops:', error);
        }
      );
    }
    else
    {
        this.customerservice.addShops(formData.userName, formData.address).subscribe(
          (response) => {
            console.log('Successfully added shops:', response);
            //console.log()
            this.router.navigate(['customer']); // Use the correct route path
          },
          (error) => {
            console.error('Error adding shops:', error);
          }
        );
      

      // Reset form after submission
      this.form.reset();
    }
      
    
  }
  loadShops(){
      // Load product data from service based on productId
      this.customerservice.customersEdit(this.userId).subscribe((customer) => {
        this.form.patchValue({
         // this.userId:customer.userId,
          userName: customer.userName,
          address: customer.address,
          
        });
       // console.log(this.userName);
       // console.log(this.address);
      });
    }

  }

  


