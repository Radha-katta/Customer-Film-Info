
import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {Customer} from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public customerListUrl :string = 'http://localhost:8091/api/customer_info';

  constructor(private httpClient: HttpClient ) { }

   /**
   * Service CAll to get All the Customers
   */

  public getCustomers(): Promise<Customer[] | void> {

    return this.httpClient.get(this.customerListUrl).toPromise().then(res => res as Customer[])
      .catch(this.handleError);
  }


  /**
   * get Customer Details API call based on input Customer id
   * @param id
   */
  public getCustomer(id :any): Promise<Customer | void> {

    return this.httpClient.get(this.customerListUrl+"/"+id).toPromise().then(res => res as Customer)
      .catch(this.handleError);
  }
  private handleError(error: any){
    console.log("error");
  }
}
