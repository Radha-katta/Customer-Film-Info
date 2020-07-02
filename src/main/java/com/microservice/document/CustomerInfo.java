package com.microservice.document;


import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection ="customers")
public class CustomerInfo {
	
	@Id
	@Field("_id")
	private int id;
	@Field("Address")
	private String address;
	@Field("City")
	private String city;
	@Field("Country")
	private String country;
	@Field("District")
	private String district;
	@Field("First Name")
	private String firstName;
	@Field("Last Name")
	private String lastName;
	@Field("Phone")
	private String phone;
	@Field("Rentals")
	private List<Rentals> rentals;
	
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getDistrict() {
		return district;
	}
	public void setDistrict(String district) {
		this.district = district;
	}
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
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public List<Rentals> getRentals() {
		return rentals;
	}
	public void setRentals(List<Rentals> rentals) {
		this.rentals = rentals;
	}

	
	
}
