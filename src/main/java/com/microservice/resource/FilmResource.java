package com.microservice.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.microservice.document.CustomerInfo;
import com.microservice.document.CustomerList;
import com.microservice.document.FilmInfo;
import com.microservice.repository.FilmRepository;
@RestController
@RequestMapping("/api/film_info")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FilmResource {
	
	@Autowired
	private FilmRepository filmRepository;
	
	@Autowired
	private RestTemplate restTemplate;
	
	
	@GetMapping
	public List<FilmInfo> getAll(){
		return filmRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<FilmInfo> getFilmInfo(@PathVariable int id) {

		Optional<FilmInfo> filmInfo = filmRepository.findById(id);

		  if (filmInfo.isPresent()) {
		    return new ResponseEntity<>(filmInfo.get(), HttpStatus.OK);
		  } else {
		    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		  }
	  }
	
	@GetMapping("/customers/{filmId}")
	public List<CustomerInfo> getfilm(@PathVariable int filmId) {
		CustomerList customerList = restTemplate.getForObject("http://CUSTOMER-MOVIES-DETAILS/api/customer_info/customers/"+filmId, CustomerList.class);
		return customerList.getCustomerInfoList();
	  }

	

}
