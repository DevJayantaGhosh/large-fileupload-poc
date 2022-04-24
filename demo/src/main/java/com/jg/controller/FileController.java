package com.jg.controller;

import java.io.FileOutputStream;
import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.fileUploadApi.entity.FileUploadRequestDTO;

@RestController
@CrossOrigin
public class FileController {
	
	@GetMapping("/")
	public String welcome() {
		return "App Running";
	}
	
	@PostMapping("/upload")
	public ResponseEntity<String> documentSubmit(FileUploadRequestDTO fileUploadRequestDTO) {
		System.out.println("Hittng---------------");
		
		String fileName = fileUploadRequestDTO.getFile().getOriginalFilename();
		String userNamew = fileUploadRequestDTO.getUserName();
		String otherInfo = fileUploadRequestDTO.getOtherInfo();
		System.out.println("Hittng---------------"+fileName);
		System.out.println("Hittng---------------"+userNamew);
		System.out.println("Hittng---------------"+otherInfo);
		
		
		try {
			FileCopyUtils.copy(fileUploadRequestDTO.getFile().getInputStream(), new FileOutputStream(fileName));
			
		}
		catch(IOException e) {
			e.printStackTrace();
			ResponseEntity<String> res = new ResponseEntity<String>(HttpStatus.EXPECTATION_FAILED);
			return res;
		}
	

		ResponseEntity<String> res = new ResponseEntity<String>(HttpStatus.OK);
		return res;
	}
	
	
	

}
