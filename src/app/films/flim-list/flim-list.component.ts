
import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { Customer } from '../../models/customer';
import {ActivatedRoute, Router} from "@angular/router";
import { Film } from 'src/app/models/Film';
import { FilmService } from 'src/app/services/film.service';
declare let $: any;

@Component({
  selector: 'app-flim-list',
  templateUrl: './flim-list.component.html',
  styleUrls: ['./flim-list.component.css']
})
export class FlimListComponent implements OnInit {

  @Output() selectedFilm = new EventEmitter<Film>();
  @Input() films: any;
  showloading = true;
 
  table:any;

  constructor(private filmService: FilmService,private router: Router,
              private route: ActivatedRoute) {
    var $self = this;
    this.getFilms();
    this.showloading = false;
    var self = this;
  }

  /***
   * gets all The Films From Data base and Display it on UI
   */
  private getFilms() {
    
    this.filmService.getAllFilms().then(res =>
    {
      
      this.films = res;
      let self = this;
      setTimeout(function(event){
      //  self.showloading = false;
        self.populateDatatable( self.films);
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
    this.table = $('#filmList').DataTable({

      data: data, 
      "processing": true,
        "language": {
            processing: `<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
            <span class="sr-only">Loading...</span> `
          },
      
      columns:[
        {data: "title", title: "Title"},
        {data: "category", title: "Category"},
        {data: "description", title: "Description"},
        {data: "rating", title: "Rating"},
        {data: "rentDuration", title: "Rental Duration"},
        {data: "", title: "Customers", sortable:false,  
        "defaultContent": `<button class='btn btn-primary customers'>View Customers</button>`},
        {data: "", title: "Film Details", sortable:false,  
        "defaultContent": `<button class='btn btn-primary details'>Details</button>`},
      ],
      drawCallback: () => {
        $('.paginate_button.next').on('click', () => {
        });
      }
    });

  $("#filmList").on("click", ".customers", event =>{
    var data = this.table.row( $(event.target).parents('tr') ).data();
    //this.selectedFilm.emit(data);
    this.router.navigate(["./filmCustomers", data.id]);
  });
  $("#filmList").on("click", ".details", event =>{
    var data = this.table.row( $(event.target).parents('tr') ).data();
  // this.selectedFilm.emit(data);
  this.router.navigate(["./filmDetails", data.id]);
  });
}


}
