package com.testpress.quiz.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.testpress.quiz.ResponseTransfer;
import com.testpress.quiz.execption.QuizAlreadyExistsException;
import com.testpress.quiz.model.Questions;
import com.testpress.quiz.model.Quiz;
import com.testpress.quiz.repository.QuizRepository;

@Service
public class QuizService {
	@Autowired
	private QuizRepository quizRepository;

	public List<Quiz> getAllQuiz() {
		return quizRepository.findAll();
	}

	

	public ResponseTransfer createQuiz(Quiz quiz) throws QuizAlreadyExistsException {
		// TODO Auto-generated method stub
		//Questions q=new Questions();
		

		Quiz quiz1=quizRepository.findByName(quiz.getQuizName());
		if (quiz1 != null) {
			throw new QuizAlreadyExistsException();
		}
		else {
			System.err.println(quiz);
			for(Questions q:quiz.getQuestionsList()) {
				q.setQuiz(quiz);
			}
			quizRepository.save(quiz);
			return new ResponseTransfer("Quiz Created successfully");
		}
	}

	public List<Questions> getQuestions(int id) {
		Quiz quiz=quizRepository.getOne(id);
		
		
		return quiz.getQuestionsList();
	}

}
