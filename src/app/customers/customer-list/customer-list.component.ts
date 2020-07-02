
import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import {ActivatedRoute, Router} from "@angular/router";
declare let $: any;

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {


  @Output() selectedCustomer = new EventEmitter<Customer>();
  @Input() customers: any;
  message: string;
  showloading = true;
  table:any;

  constructor(private customerService: CustomerService,private router: Router,
              private route: ActivatedRoute) {
    var $self = this;
    this.getCustomers();
    var self = this;
  }

  /***
   * gets all The Customers From Data base and Display it on UI
   */
  private getCustomers() {
    
    this.customerService.getCustomers().then(res =>
    {
      
      this.customers = res;
      let self = this;
      setTimeout(function(event){
        self.showloading = false;
        self.populateDatatable( self.customers);
        }, 3000);
        return res;
    } );
  }
  ngOnInit() {
  
  }



  /**
   * Populates the Data table on browser using jquery datatable plugin
   * @param data
   */

  populateDatatable(data){
    this.table = $('#customerList').DataTable({

      data: data, 
      "processing": true,
        "language": {
            processing: `<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
            <span class="sr-only">Loading...</span> `
          },
      
      columns:[
        {data: "firstName", title: "First Name"},
        {data: "address", title: "Address"},
        {data: "country", title: "Country"},
        {data: "", title: "View", sortable:false,  
        "defaultContent": `<button class='btn btn-primary edit'>View Rental</button>`},
      ],
      drawCallback: () => {
        $('.paginate_button.next').on('click', () => {
        });
      }
    });

  /*$(".edit").on('click', event =>{
    var data = this.table.row( $(event.target).parents('tr') ).data();
    this.selectedCustomer.emit(data);
  });*/
  $("#customerList").on("click", ".edit", event =>{
    var data = this.table.row( $(event.target).parents('tr') ).data();
    this.selectedCustomer.emit(data);
  });
}

}
