export class Film{

    
	 id: string;
	 actors:[];
    category:string;    
	 description:string;
	 length:string;
	rating:string;
	 rentDuration:string;
	replacementCost:string;
	specialFeatures:string;
     title:string;
     
     constructor(id: string,actors:[], category:string,   description:string, length:string, rating:string,  rentDuration:string,
       replacementCost:string,specialFeatures:string, title:string){

        this.id = id;
        this.category = category;
        this.description = description;
        this.length = length;
        this.rating  = rating;
        this.rentDuration = rentDuration;
        this.replacementCost = replacementCost;
        this.specialFeatures = specialFeatures;
        this.title = title;

     }

}