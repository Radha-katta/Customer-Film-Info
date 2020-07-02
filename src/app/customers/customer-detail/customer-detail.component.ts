
import { Component, Input, OnInit, AfterViewInit, OnChanges, SimpleChanges} from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import {Router, ActivatedRoute} from "@angular/router";
import { Customer } from 'src/app/models/Customer';
declare let $: any;
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit, OnChanges  {

  @Input() customer: any;
  table:any;

  ngOnInit(): void {
    if(this.customer!= undefined){
      this.populateData();
    }
  }
  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) {
    
  }
  

  ngOnChanges(changes: SimpleChanges){
   
    console.log(changes);
    if(changes.customer.currentValue!=undefined){
      this.refreshTableData();
    }
  }

  refreshTableData(){
    if(this.table){
     this.table.destroy();
     this.populateData();
    }
     
   }


  

  populateData(){
    let data = this.getRentalInfo(this.customer.rentals);
   // let data = this.customer.rentals;
    this.table = $('#customerRentalList').DataTable({

      data: data, 
      "processing": true,
        "language": {
            processing: `<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
            <span class="sr-only">Loading...</span> `
          },
     
      columns:[
        {data: "rentalDate", title: "RentedDate"},
        {data: "rentalDuration", title: "Rented Duration(days)"},
        {data: "renatlCost", title: "Rental Cost($)"},
       
      ],
      drawCallback: () => {
        $('.paginate_button.next').on('click', () => {
        });
      }
    });

  

  $(".filmInfo").on('click', event =>{
    var data = this.table.row( $(event.target).parents('tr') ).data();
   // this.selectedCustomer.emit(data);
  });
}
  
getRentalInfo(rentals){

  let rentalDate="";
  let rentalDuration;
  let renatlCost=0;
  let rentalInfo =[];

  rentals.forEach(rental =>{
      rentalDate = rental.rentalDate;
      rentalDuration = this.getRentalDuration(rental.rentalDate, rental.returnDate);
      rental.payments.forEach(payment=>{
          renatlCost = +payment.amount+ renatlCost;
      });
      rentalInfo.push({"rentalDate":rentalDate, "rentalDuration":rentalDuration, "renatlCost":renatlCost});
  });
  return rentalInfo;
  }

  getRentalDuration(rentalDate, returnDate){
      let rental= new Date(rentalDate);
      let returnDt = new Date(returnDate);

      let diffTime = Math.abs(+returnDt - +rental);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
      return diffDays;
  }
}
