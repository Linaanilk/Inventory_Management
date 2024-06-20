import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { CategoryService } from '../../../Category/containers/services/categories.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends ComponentBase  {
  
  
  labels: any[] = [];
  TotalQuantity!:number;
  OutOfStockQty!: number;
  Overstocked!: number;
  categorydata!:any[];
  qtyData!:any[];
  basicData:any;
  basicOptions:any;
  data:any[]=[];
  categoryName:any;
  i=1;
  j=0;
  graphData!:{label:string;data:number}[];
  allproducts:any[]=[];
  constructor(private categoryservice:CategoryService) {
    super();
  }

  
  
  override initVariables(): void {
    this.chartData()
  }
  override load(): void {
    
  }
  override unload(): void {
    
  }

  subscribeEvents(): void { 
    this.categoryservice.GetTotalProductQuantity().subscribe(list=>{
      this.TotalQuantity=list.quantity;
      console.log(this.TotalQuantity);
    
    this.categoryservice.GetOutOfStockProduct().subscribe(list=>{
      this.OutOfStockQty=list.quantity;
   
      // this.Overstocked=this.TotalQuantity-this.OutOfStockQty;
      // console.log(this.Overstocked);
    })})
   
    this.categoryservice.GetAllProducts().subscribe(list=>{
      this.allproducts=list;
      console.log(this.allproducts);
      this.allproducts.forEach(element => {
        if(element.quantity>100)
        {
          this.j++;
          console.log(element);
        }
      });
  })
  
  //this.Overstocked=this.j;
}

chartData() {
interface Category {
  categoryName: string;
  categoryId: number;
  productCount: number;
}


  let labels: string[] = [];
  let data: number[] = [];

  this.categoryservice.getProductQtyFromCategory().subscribe((categories: Category[]) => {
    categories.forEach((category: Category) => {
      labels.push(category.categoryName);
      data.push(category.productCount);
    });

    // Once all data is retrieved, construct the chart
    this.constructChart(labels, data);
  });
}

constructChart(labels: string[], data: number[]) {
  this.basicData = {
    labels: labels,
    datasets: [
      {
        label: 'Product count by category',
        backgroundColor: '#66CDAA',
        data: data,
        barThickness: 20
      }
    ]
  };

  this.basicOptions = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 12,
            weight: 'bold'
          },
          color: 'black'
        }
      }
    },
    scales: {
      y: {
        ticks: {
          // Provide an array of custom values for the y-axis ticks
          values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      }
    }
  };
}
}
