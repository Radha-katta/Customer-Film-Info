package com.microservice.repository;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.microservice.document.FilmInfo;

public interface FilmRepository extends MongoRepository<FilmInfo, String>{

	Optional<FilmInfo> findById(int id);
}
