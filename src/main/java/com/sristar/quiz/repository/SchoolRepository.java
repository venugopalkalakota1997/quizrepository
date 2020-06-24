package com.sristar.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sristar.quiz.model.School;

public interface SchoolRepository extends JpaRepository<School, Integer> {
	@Query(value = "select * from school where username = :userName", nativeQuery = true)
	public School findByName(@Param(value = "userName") String userName);

	
}
