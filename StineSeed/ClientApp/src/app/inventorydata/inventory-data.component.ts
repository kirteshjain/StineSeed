import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inventory } from '../models/inventory';
import { Request } from '../models/request';
import { InventoryRequestDetail } from '../models/inventoryRequestDetail';
//import { request } from 'http';

@Component({
  selector: 'app-inventory-data',
  templateUrl: './inventory-data.component.html'
})
export class InventoryDataComponent {
  public inventoryRequests: any = {};
  public inventory: Inventory[] = [];
  public requests: Request[] = [];
  public inventoryRequestDetail: InventoryRequestDetail[] = [];
  //public inventoryRequestDetails: any = [];

  constructor(http: HttpClient) {
   
    http.get<any>('https://mocki.io/v1/0077e191-c3ae-47f6-bbbd-3b3b905e4a60').subscribe(result => {
      this.inventoryRequests = result;
      this.inventory = result.inventory;
      this.requests = result.requests;

  
      this.inventoryRequestDetail = this.requests.map(value => {
        return {
          id: value.id,
          inventoryId: value.inventoryId,
          name: this.getInventoryById(value.inventoryId).name,
          kernels: this.getInventoryById(value.inventoryId).kernels,
          requestedKernels: value.requestedKernels,
          //availableKernels: this.getInventoryById(value.inventoryId).kernels - value.requestedKernels
        }
      })

      console.log(this.inventoryRequestDetail);
    }, error => console.error(error));

     
  }



  public getInventoryById(id: number): any {
    return this.inventory.find(item => {
      return item.id === id;
    })
  }
}

