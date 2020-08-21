package com.sristar.quiz.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sristar.quiz.ResponseTransfer;
import com.sristar.quiz.execption.QuizAlreadyExistsException;
import com.sristar.quiz.model.Questions;
import com.sristar.quiz.model.Quiz;
import com.sristar.quiz.repository.QuizRepository;

@Service
public class QuizService {
	@Autowired
	private QuizRepository quizRepository;

	public List<Quiz> getAllQuiz() {
		return quizRepository.findAll();
	}

	

	public ResponseTransfer createQuiz(Quiz quiz) throws QuizAlreadyExistsException {
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
