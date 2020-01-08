package com.bike.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BikeWorldResponse {
	private boolean status;
	private String message;
	private String token;
}
