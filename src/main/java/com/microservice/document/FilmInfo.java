package com.microservice.document;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection ="movies")
public class FilmInfo {
	
	@Id
	@Field("_id")
	private int id;
	@Field("Actors")
	private List<Actor> actors;
	@Field("Category")
	private String category;
	@Field("Description")
	private String description;
	@Field("Length")
	private String length;
	@Field("Rating")
	private String rating;
	@Field("Rental Duration")
	private String rentDuration;
	@Field("Replacement Cost")
	private String replacementCost;
	@Field("Special Features")
	private String specialFeatures;
	@Field("Title")
	private String title;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public List<Actor> getActors() {
		return actors;
	}
	public void setActors(List<Actor> actors) {
		this.actors = actors;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getLength() {
		return length;
	}
	public void setLength(String length) {
		this.length = length;
	}
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating = rating;
	}
	public String getRentDuration() {
		return rentDuration;
	}
	public void setRentDuration(String rentDuration) {
		this.rentDuration = rentDuration;
	}
	public String getReplacementCost() {
		return replacementCost;
	}
	public void setReplacementCost(String replacementCost) {
		this.replacementCost = replacementCost;
	}
	public String getSpecialFeatures() {
		return specialFeatures;
	}
	public void setSpecialFeatures(String specialFeatures) {
		this.specialFeatures = specialFeatures;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	
	
	

}
