package com.testpress.quiz.execption;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST, reason = "Quiz Already Exits")
public class QuizAlreadyExistsException extends Exception{
	private static final long serialVersionUID = 1L;

	private static final Logger logger = LoggerFactory.getLogger(QuizAlreadyExistsException.class);

	public QuizAlreadyExistsException() {
		logger.debug("inside QuizAlreadyExistsException class");
	}
}
