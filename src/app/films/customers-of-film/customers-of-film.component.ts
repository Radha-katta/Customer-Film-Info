import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { FilmService } from 'src/app/services/film.service';
declare let $: any;

@Component({
  selector: 'app-customers-of-film',
  templateUrl: './customers-of-film.component.html',
  styleUrls: ['./customers-of-film.component.css']
})
export class CustomersOfFilmComponent  {
  customer:any;
  showloading = true;
  table;

 constructor(private route:ActivatedRoute, private router: Router, private filmService:FilmService) { 
    let filmId =this.route.snapshot.paramMap.get('id');
    this.filmService.getCustomersOfFilm(filmId).then(res =>{
      this.customer = res;
      this.populateDatatable(res);
      this.showloading = false;
    });
  }
  showFilms(){
     this.router.navigate(["./films"]);
  }


  populateDatatable(data){
    this.table = $('#customersOfFilmList').DataTable({

      data: data, 
      "processing": true,
        "language": {
            processing: `<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
            <span class="sr-only">Loading...</span> `
          },
      
      columns:[
        {data: "firstName", title: "First Name"},
        {data: "city", title: "City"},
        {data: "address", title: "Address"},
      
      ],
     
    });
  }
 
}
