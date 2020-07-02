package com.microservice.document;

import org.springframework.data.mongodb.core.mapping.Field;

public class Payments {
	
	@Field("Amount")
	private int amount;
	@Field("Payment Date")
	private String paymentDate;
	@Field("Payment Id")
	private int paymentId;
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
