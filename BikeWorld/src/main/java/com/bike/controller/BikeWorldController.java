package com.bike.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bike.dto.BikeWorldResponse;
import com.bike.dto.User;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class BikeWorldController {

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public BikeWorldResponse login(@RequestBody User user) {
		System.out.println("Got request");
		BikeWorldResponse response = new BikeWorldResponse();
		if (user.getUsername().equals("sekars") && user.getPassword().equals("password")) {
			response.setStatus(true);
			response.setMessage("Success");
			response.setToken("JWT Token");
		} else {
			response.setStatus(false);
			response.setMessage("Failed");
		}
		return response;
	}
	
	@RequestMapping(value = "/ping", method = RequestMethod.GET)
	public String ping() {
		return "ping success!!!";
	}
}
