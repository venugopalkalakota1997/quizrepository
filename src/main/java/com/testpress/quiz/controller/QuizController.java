package com.testpress.quiz.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.testpress.quiz.ResponseTransfer;
import com.testpress.quiz.execption.QuizAlreadyExistsException;
import com.testpress.quiz.model.Questions;
import com.testpress.quiz.model.Quiz;
import com.testpress.quiz.service.QuizService;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("http://localhost:4200")
public class QuizController {
	
	@Autowired
	private QuizService quizservice;
	
	@GetMapping("/allquiz")
	public List<Quiz> getAllQuiz() {
		return quizservice.getAllQuiz();
	}
	
	@GetMapping("/questions/{id}")
	public List<Questions> getQuestions(@PathVariable int id) {
		return quizservice.getQuestions(id);
	}
	
	@PostMapping("/create")
	public ResponseTransfer createQuiz(@RequestBody Quiz quiz) throws QuizAlreadyExistsException {
		System.err.println(quiz);
		return quizservice.createQuiz(quiz);	
	}
	

}
