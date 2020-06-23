package com.testpress.quiz.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "school")
public class School {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NotNull
	@Column(name = "id")
	int id;
	
	@NotNull
	@Column(name = "username")
	String userName;
	
	@NotNull
	@Column(name = "password")
	String password;
	
	@NotNull
	@Column(name = "school_name")
	String schoolName;

	public School() {
		super();
		// TODO Auto-generated constructor stub
	}

	public School(@NotNull int id, @NotNull String userName, @NotNull String password, @NotNull String schoolName) {
		super();
		this.id = id;
		this.userName = userName;
		this.password = password;
		this.schoolName = schoolName;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getSchoolName() {
		return schoolName;
	}

	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}

	@Override
	public String toString() {
		return "School [id=" + id + ", userName=" + userName + ", password=" + password + ", schoolName=" + schoolName
				+ "]";
	}
	
	
}
