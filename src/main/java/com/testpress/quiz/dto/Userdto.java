package com.testpress.quiz.dto;

public class Userdto {
	private String userName;
	private String password;
	private String role;
	
	

	public Userdto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Userdto(String userName, String password, String role) {
		super();
		this.userName = userName;
		this.password = password;
		this.role = role;
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

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "Userdto [userName=" + userName + ", password=" + password + ", role=" + role + "]";
	}

	

}
