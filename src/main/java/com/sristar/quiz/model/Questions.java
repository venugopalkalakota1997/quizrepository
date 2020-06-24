package com.sristar.quiz.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Table(name = "questions")
public class Questions {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NotNull
	@Column(name = "id")
	int id;
	
	@NotNull
	@Column(name = "question")
	String question;
	
	@NotNull
	@Column(name = "a")
	String a;
	
	@NotNull
	@Column(name = "b")
	String b;
	
	@NotNull
	@Column(name = "c")
	String c;
	
	@NotNull
	@Column(name = "d")
	String d;
	
	@NotNull
	@Column(name = "answer")
	String answer;
	
	@ManyToOne(fetch = FetchType.LAZY)
@JsonIgnore
	@JoinColumn(name = "fk_quiz_id")
	Quiz quiz;

	public Questions() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public Questions(@NotNull int id, @NotNull String question, @NotNull String a, @NotNull String b, @NotNull String c,
			@NotNull String d, @NotNull String answer) {
		super();
		this.id = id;
		this.question = question;
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.answer = answer;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}



	public String getA() {
		return a;
	}



	public void setA(String a) {
		this.a = a;
	}



	public String getB() {
		return b;
	}



	public void setB(String b) {
		this.b = b;
	}



	public String getC() {
		return c;
	}



	public void setC(String c) {
		this.c = c;
	}



	public String getD() {
		return d;
	}



	public void setD(String d) {
		this.d = d;
	}



	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	


	public Quiz getQuiz() {
		return quiz;
	}

	public void setQuiz(Quiz quiz) {
		this.quiz = quiz;
	}



	@Override
	public String toString() {
		return "Questions [id=" + id + ", question=" + question + ", a=" + a + ", b=" + b + ", c=" + c + ", d=" + d
				+ ", answer=" + answer + "]";
	}

	

	

}
