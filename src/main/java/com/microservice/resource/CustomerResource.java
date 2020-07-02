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

import com.microservice.document.CustomerInfo;
import com.microservice.document.CustomerList;
import com.microservice.repository.CustomerInfoRepository;


@RestController
@RequestMapping("/api/customer_info")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CustomerResource {

	@Autowired
	private CustomerInfoRepository customerInfoRepository;
	
	
	@GetMapping
	public List<CustomerInfo> getAll(){
		return customerInfoRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<CustomerInfo> getCustomerInfo(@PathVariable int id) {

		Optional<CustomerInfo> customerInfoOp = customerInfoRepository.findById(id);

		  if (customerInfoOp.isPresent()) {
			 // CustomerInfo customerInfo = customerInfoOp.get();	  
		    return new ResponseEntity<>(customerInfoOp.get(), HttpStatus.OK);
		  } else {
		    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		  }
	  }
	
	@GetMapping("/customers/{filmId}")
	public CustomerList getAllCustomersOfFilm(@PathVariable int filmId) {
		List<CustomerInfo> list = customerInfoRepository.findByRentals_filmId(filmId);
		CustomerList customerList =  new CustomerList();
		customerList.setCustomerInfoList(list);
		return customerList;
	  }
	
	/*@GetMapping("/films/{filmId}")
	public List<CustomerInfo> getfilm(@PathVariable int filmId) {
		//return customerInfoRepository.findByRentals_filmId(filmId);
	  }*/

	
}
