package com.clinic.controller;

import java.util.Date;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
	
	@RequestMapping("/greeting")
	public String testController(@RequestParam(value="name", required=false, defaultValue="World") String name){
		StringBuilder sbb = new StringBuilder();
		sbb.append("hello: ").append(name).append("  --  ").append((new Date()).toString());
		
		return  sbb.toString();
	}
}
