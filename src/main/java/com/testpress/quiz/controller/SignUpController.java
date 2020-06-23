package com.testpress.quiz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.testpress.quiz.ResponseTransfer;
import com.testpress.quiz.execption.SchoolAlreadyExistsException;
import com.testpress.quiz.execption.UserAlreadyExistsException;
import com.testpress.quiz.model.School;
import com.testpress.quiz.model.Student;
import com.testpress.quiz.service.SignUpService;

@RestController
@RequestMapping("/signup")
@CrossOrigin("http://localhost:4200")
public class SignUpController {
	@Autowired
	private SignUpService signupservice;
	@PostMapping("/addschool")
	public ResponseTransfer addMentor(@RequestBody School school) throws SchoolAlreadyExistsException {
		return signupservice.addSchool(school);
	}
	
	@PostMapping("/addstudent")
	public ResponseTransfer addStudent(@RequestBody Student student) throws UserAlreadyExistsException {
		return signupservice.addStudent(student);
	}

}
