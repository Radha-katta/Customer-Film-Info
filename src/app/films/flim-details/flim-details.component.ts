import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-flim-details',
  templateUrl: './flim-details.component.html',
  styleUrls: ['./flim-details.component.css']
})
export class FlimDetailsComponent implements OnInit {

   film: any;
  table:any;

  constructor(private route:ActivatedRoute, private router: Router, private filmService:FilmService) { 
    let filmId =this.route.snapshot.paramMap.get('id');
    this.filmService.getFilm(filmId).then(res =>{
      this.film = res;
    });
  }

  ngOnInit(): void {
  }

  showFilms(){
     this.router.navigate(["./films"]);
    //this.router.navigate("./films");
  }

}
