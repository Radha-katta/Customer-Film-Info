package com.microservice.document;

import org.springframework.data.mongodb.core.mapping.Field;

public class Payments {
	
	private int amount;
	private String paymentDate;
	private int paymentId;
	
	public Payments() {
		
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public String getPaymentDate() {
		return paymentDate;
	}
	public void setPaymentDate(String paymentDate) {
		this.paymentDate = paymentDate;
	}
	public int getPaymentId() {
		return paymentId;
	}
	public void setPaymentId(int paymentId) {
		this.paymentId = paymentId;
	}
	

}
