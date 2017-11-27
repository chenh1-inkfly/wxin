package com.clinic.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.clinic.api.DemoService;


@RestController
public class TestController {
	
	
	@Autowired
	private DemoService demoService;
	
	@RequestMapping("/greeting")
	public String testController(@RequestParam(value="name", required=false, defaultValue="World") String name){
		StringBuilder sbb = new StringBuilder();
		sbb.append(demoService.sayHello(name));
		
		return  sbb.toString();
	}
}
