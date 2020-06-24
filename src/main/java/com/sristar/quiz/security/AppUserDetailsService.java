package com.sristar.quiz.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.sristar.quiz.dto.Userdto;
import com.sristar.quiz.model.School;
import com.sristar.quiz.model.Student;
import com.sristar.quiz.repository.SchoolRepository;
import com.sristar.quiz.repository.StudentRepository;

@Service
public class AppUserDetailsService implements UserDetailsService {

	@Override
	public String toString() {
		return "AppUserDetailsService [studentRepository=" + studentRepository + "]";
	}

	@Autowired
	StudentRepository studentRepository;

	@Autowired
	SchoolRepository schoolRepository;

	@Override
	public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
		try {

			Userdto userdto = new Userdto();
			String userName = name;
			name = name.substring(0, name.length() - 1);
			if (userName.endsWith("s")) {
				School school = schoolRepository.findByName(name);
				userdto = new Userdto(school.getUserName(), school.getPassword(), "s");
				AppUser appUser = new AppUser(userdto);
				return appUser;
			} else if (userName.endsWith("u")) {
				Student student = studentRepository.findByName(name);
				userdto = new Userdto(student.getUserName(), student.getPassword(), "u");
				AppUser appUser = new AppUser(userdto);
				return appUser;
			}
			return null;

		} catch (Exception e) {
		}
		return null;
	}

}
