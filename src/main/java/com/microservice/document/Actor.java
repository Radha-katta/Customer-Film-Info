package com.microservice.document;

import org.springframework.data.mongodb.core.mapping.Field;

public class Actor {
	
	@Field("First name")
	private String firstName;
	@Field("Last name")
	private String lastName;
	
	private int length;

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getLength() {
		return length;
	}

	public void setLength(int length) {
		this.length = length;
	}
	

}
