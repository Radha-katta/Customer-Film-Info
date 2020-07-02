
import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {Film} from '../models/Film';
import {Customer} from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  public filmListUrl :string = 'http://localhost:8092/api/film_info';
 
  constructor(private httpClient: HttpClient ) { }

   /**
   * Service CAll to get All the Movies
   */

  public getAllFilms(): Promise<Film[] | void> {

    return this.httpClient.get(this.filmListUrl).toPromise().then(res => res as Film[])
      .catch(this.handleError);
  }


  /**
   * get Film Details API call based on input film id
   * @param id
   */
  public getFilm(id :any): Promise<Film | void> {

    return this.httpClient.get(this.filmListUrl+"/"+id).toPromise().then(res => res as Film)
      .catch(this.handleError);
  }

  public getCustomersOfFilm(id :any): Promise<Customer[] | void>{
       return this.httpClient.get(this.filmListUrl+"/customers/"+id).toPromise().then(res => res as Customer[])
      .catch(this.handleError);
  }
  private handleError(error: any){
    console.log("error");
  }
}
