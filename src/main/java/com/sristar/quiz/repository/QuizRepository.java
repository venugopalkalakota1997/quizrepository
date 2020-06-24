package com.sristar.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sristar.quiz.model.Quiz;


@Repository
public interface QuizRepository extends JpaRepository<Quiz, Integer> {

	
	@Query(value = "select * from quiz where quiz_name = :quizName", nativeQuery = true)
	Quiz findByName(@Param(value = "quizName") String quizName);

}
