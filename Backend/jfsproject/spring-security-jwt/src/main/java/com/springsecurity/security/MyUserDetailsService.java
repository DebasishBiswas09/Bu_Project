package com.springsecurity.security;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.springsecurity.controller.SecurityController;
import com.springsecurity.models.UserModel;


@Service

public class MyUserDetailsService implements UserDetailsService {
	
	@Autowired
	private SecurityController repo;
	static String user,  password;
	
//	public void auth(String e, String b) 
//	{
//		UserModel k=  repo.findByEmailIdById(e);
//		//UserCarDetails p = new UserCarDetails();
//		
//			if(b.equals(k.getPassword()))
//				{password=k.getPassword();
//				user=k.getEmailId();
//				
//				
//				
//				
//			
//			System.out.println(user+password);
//		}
//		System.out.println(user+password);
//
//	}
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		if(username.equals("username"))
//		{
//			return new User("username","$2a$12$vW3JUxIwIe2epnIQDUJOL.FFcwgRgnBb2RK.AXKppapGr0A99c1hW",
//					new ArrayList<>());
//			
//		}
//		else if (user.equals(username)) {
//			return new User(user, password,
//					new ArrayList<>());
//		} else {
//			throw new UsernameNotFoundException("User not found with username: " + username);
//		}
		UserModel usermodel=repo.findByUserName(username);
		 if (usermodel == null) {
	            throw new UsernameNotFoundException("Could not find user"+" "+usermodel);
	        }
		 System.out.println("helloooo......"+username);
			
		return new MyUserDetails(usermodel);
		
		
		
	}

}
