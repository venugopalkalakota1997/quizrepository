package com.testpress.quiz.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.testpress.quiz.ResponseTransfer;
import com.testpress.quiz.execption.SchoolAlreadyExistsException;
import com.testpress.quiz.execption.UserAlreadyExistsException;
import com.testpress.quiz.model.School;
import com.testpress.quiz.model.Student;
import com.testpress.quiz.repository.SchoolRepository;
import com.testpress.quiz.repository.StudentRepository;
@Service
public class SignUpService {

	@Autowired
	private SchoolRepository schoolRepository;
	
	@Autowired
	private StudentRepository studentRepository;
	
	@Transactional
	public ResponseTransfer addSchool(School school) throws SchoolAlreadyExistsException {
		// TODO Auto-generated method stub
		School school1 = schoolRepository.findByName(school.getUserName());
		if (school1 != null) {
			throw new SchoolAlreadyExistsException();
		} else {
			BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
			school.setPassword(bCryptPasswordEncoder.encode(school.getPassword()));
			schoolRepository.save(school);
			return new ResponseTransfer("Save successfully");
		}
	}

	@Transactional
	public ResponseTransfer addStudent(Student student) throws UserAlreadyExistsException {
		// TODO Auto-generated method stub
		Student student1 = studentRepository.findByName(student.getUserName());
		if (student1 != null) {
			throw new UserAlreadyExistsException();
		} else {
			BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
			student.setPassword(bCryptPasswordEncoder.encode(student.getPassword()));
			studentRepository.save(student);
			return new ResponseTransfer("Save successfully");
		}
	}

}
