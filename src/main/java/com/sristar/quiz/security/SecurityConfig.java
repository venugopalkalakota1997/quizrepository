package com.sristar.quiz.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	AppUserDetailsService appUserDetailsService;
	@Autowired
	private MyBasicAuthenticationEntryPoint authenticationEntryPoint;

	private static final Logger logger = LoggerFactory.getLogger(SecurityConfig.class);

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(appUserDetailsService).passwordEncoder(passwordEncoder());
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		logger.info("Start");
		return new BCryptPasswordEncoder();
	}

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
		httpSecurity.cors();
		httpSecurity.csrf().disable().httpBasic() 
		.authenticationEntryPoint(authenticationEntryPoint).and()
		.authorizeRequests()
		//.antMatchers("/**").permitAll()
		.antMatchers("/authenticate").hasAnyRole("s", "u")
		.antMatchers("/signup/**").permitAll()
		.antMatchers("/quiz/**").permitAll()
		.antMatchers("/favicon.ico","/","/runtime-es2015.js","/main-es2015.js","/polyfills-es2015.js","/styles-es2015.js","/vendor-es2015.js").permitAll()
		.anyRequest().authenticated().and().addFilter(new JwtAuthorizationFilter(authenticationManager()));
	}
}
