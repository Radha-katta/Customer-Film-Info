import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';

import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/Customer';

declare let $: any;

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  constructor(private customerService: CustomerService) {
    
  }
 selectedCustomer:any;


 ngOnInit(): void {
   
 }

 onCustomerSelected(data){
    this.selectedCustomer = data;
 }
}
