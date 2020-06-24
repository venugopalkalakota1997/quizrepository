package com.sristar.quiz.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;



@Entity
@Table(name = "quiz")
public class Quiz {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NotNull
	@Column(name = "id")
	int id;
	
	@NotNull
	@Column(name = "quiz_name")
	String quizName;
	
	@OneToMany(fetch = FetchType.LAZY,mappedBy = "quiz", cascade = CascadeType.ALL)
	List<Questions> questionsList;

	public Quiz() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Quiz(@NotNull int id, @NotNull String quizName) {
		super();
		this.id = id;
		this.quizName = quizName;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getQuizName() {
		return quizName;
	}

	public void setQuizName(String quizName) {
		this.quizName = quizName;
	}

	public List<Questions> getQuestionsList() {
		return questionsList;
	}

	public void setQuestionsList(List<Questions> questionsList) {
		this.questionsList = questionsList;
	}

	@Override
	public String toString() {
		return "Quiz [id=" + id + ", quizName=" + quizName + "]";
	}

	

	
	
	
	
}
