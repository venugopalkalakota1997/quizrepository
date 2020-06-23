package com.testpress.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.testpress.quiz.model.Student;


@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
	@Query(value = "select * from student where username = :userName", nativeQuery = true)
	public Student findByName(@Param(value = "userName") String userName);

}
