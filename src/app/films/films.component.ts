import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 selectedFilm:any;

 onFilmSelected(data){
    this.selectedFilm = data;
 }
}
