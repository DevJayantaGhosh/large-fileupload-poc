package com.example.fileUploadApi.controller;

import java.io.InputStream;



import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.fileUploadApi.entity.FileUploadRequestDTO;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping(path = "/fileUpload")
@CrossOrigin(origins = "http://localhost:4200")
public class FileController 
{
	
	private static Logger logger = LoggerFactory.getLogger(FileController.class);
	
    
	@PostMapping( value = "/upload",consumes = "multipart/form-data" )
	public ResponseEntity<String> uploadData(@RequestParam("myFile") MultipartFile file,@RequestParam("userName") String dto,@RequestParam("IdNumber") int number,@RequestParam("arr") String [] arr, @RequestParam("special") String special) throws Exception {
		if (file == null) {
			throw new RuntimeException("You must select the a file for uploading");
		}
		
		String userName= dto;
		
		FileUploadRequestDTO specialDTO=new ObjectMapper().readValue(special, FileUploadRequestDTO.class);
		
		logger.info("userName: " + userName);
		logger.info("number: " + number);
		logger.info("arr: " + arr.length);
		
		logger.info("====================SPECIAL=================");
		logger.info("arr: " + specialDTO.getSpecialCArr().length);
		logger.info("Str: " + specialDTO.getSpecialA());
		int add = specialDTO.getSpecialBNumber()+1;
		System.out.println(add);
		
		InputStream inputStream = file.getInputStream();
		String originalName = file.getOriginalFilename();
		String name = file.getName();
		String contentType = file.getContentType();
		long size = file.getSize();
		logger.info("inputStream: " + inputStream);
		logger.info("originalName: " + originalName);
		logger.info("name: " + name);
		logger.info("contentType: " + contentType);
		logger.info("size: " + size);
		// Do processing with uploaded file data in Service layer
		return new ResponseEntity<String>(originalName, HttpStatus.OK);
	}
	}
    
     
