package com.sristar.quiz.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.sristar.quiz.dto.Userdto;



public class AppUser implements UserDetails {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Override
	public String toString() {
		return "AppUser [user=" + userdto + ", authorities=" + authorities + "]";
	}

	String ROLE_PREFIX = "ROLE_";

	String userName;
	String password;
	String role;

	private Userdto userdto; // entity reference
	private Collection<? extends GrantedAuthority> authorities;

	public AppUser(Userdto userdto) {

		this.userName = userdto.getUserName();
		this.password = userdto.getPassword();
		this.role = userdto.getRole();
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		List<GrantedAuthority> list = new ArrayList<GrantedAuthority>();

		list.add(new SimpleGrantedAuthority(ROLE_PREFIX + role));

		return list;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return userName;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
