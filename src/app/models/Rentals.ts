import {Payments} from "./Payments";
export class Rentals{
   
	filmTitle:string;
	rentalDate:string;
	returnDate:string;
	filmId:string;
    rentalId:string;
    staffId:string;
     payments:Payments[];
     
     constructor(filmTitle:string, rentalDate:string, returnDate:string, filmId:string,
        rentalId:string, staffId:string, payments:Payments[]){
            this.filmTitle = filmTitle;
            this.rentalDate = rentalDate;
            this.returnDate = returnDate;
            this.filmId = filmId;
            this.rentalId = rentalId;
            this.staffId = staffId;
            this.payments = payments;
     }

     
}