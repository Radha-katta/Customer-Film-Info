export class Payments{
   
	amount:string;
	paymentDate:string;
	paymentId:string;
	constructor(amount:string, paymentDate:string, paymentId:string){
            this.amount = amount;
            this.paymentDate = paymentDate;
            this.paymentId = paymentId;
    }
}