package com.microservice.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.microservice.document.CustomerInfo;

public interface CustomerInfoRepository extends MongoRepository<CustomerInfo, String>{

	Optional<CustomerInfo> findById(int id);
	
	//@Query("{ 'instock': { 'warehouse': ?0, 'qty': ?1 } }")
	List<CustomerInfo> findByRentals_filmId(int filmId);

}
