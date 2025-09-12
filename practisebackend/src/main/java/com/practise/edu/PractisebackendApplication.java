package com.practise.edu;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class PractisebackendApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(PractisebackendApplication.class, args);
		System.out.println("Project is Running...");
		
	}

}
