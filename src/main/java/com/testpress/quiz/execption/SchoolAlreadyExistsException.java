package com.testpress.quiz.execption;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST, reason = "School Already Exits")
public class SchoolAlreadyExistsException extends Exception {
	/**
		 * 
		 */
	private static final long serialVersionUID = 1L;

	private static final Logger logger = LoggerFactory.getLogger(SchoolAlreadyExistsException.class);

	public SchoolAlreadyExistsException() {
		logger.debug("inside SchoolAlreadyExistsException class");
	}
}
