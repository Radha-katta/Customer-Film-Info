import { Rentals } from './Rentals';

export class Customer{
    id:string;
    address: string;
    city : string;
    country : string;
    district : string;
    firstName : string;
    lastName : string;
    phone : string;
    rentals : Rentals[];
   

   constructor(id:string, address: string,
    city: string, country : string,  district : string, 
    firstName : string, lastName : string, phone : string, rentals : Rentals[] ){
          this.id = id;
          this.address = address;
          this.city = city;
          this.country = country;
          this.district = district;
          this.firstName = firstName;
          this.lastName = lastName;
          this.phone = phone;
          this.rentals = rentals;
   }

   

}