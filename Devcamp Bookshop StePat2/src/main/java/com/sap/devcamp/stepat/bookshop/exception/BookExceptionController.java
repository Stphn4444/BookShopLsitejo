package com.sap.devcamp.stepat.bookshop.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


@ControllerAdvice
public class BookExceptionController {

	@ExceptionHandler(value = NotExistsException.class)
	
	public ResponseEntity<Object> exception (NotExistsException exception) {
		 return new ResponseEntity<>("Book not found", HttpStatus.NOT_FOUND);
		 }
	
}
