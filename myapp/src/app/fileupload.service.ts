import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fileuploadrequest } from './fileuploadrequest';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  constructor(private http:HttpClient) { }

  URL='http://localhost:9292/upload';
  uploadFileWithDetails(req:Fileuploadrequest):Observable<any>{
    return this.http.post<any>(this.URL,req);
  }

  check():Observable<any>{
    return this.http.get<any>('http://localhost:9292/');
  }



  
  SERVER_URL: string = "http://localhost:8080/fileUpload/upload";  

  public upload(formData:FormData) {
    console.log("upload service function is called")
    console.log("Data going ",formData)
    return this.http.post<FormData>(this.SERVER_URL, formData, {  
        reportProgress: true,  
        observe: 'events'  
      });  
  }

}
