import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FileDTO } from '../file-dto';
import { FileuploadService } from '../fileupload.service';
import { Fileuploadrequest } from '../fileuploadrequest';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;files  = []; 
  fileName: string;

  constructor(private fileUploadService : FileuploadService) { }

  ngOnInit(): void {
  }

  fileNeedtoUpload:any;
  onFileSelection(e){
    this.fileNeedtoUpload=null;
    this.fileNeedtoUpload= e.target.files[0];
  }
//   onClick() {  
//     const fileUpload = this.fileUpload.nativeElement;fileUpload.onchange = () => {  
//     for (let index = 0; index < fileUpload.files.length; index++)  
//     {  
//      const file = fileUpload.files[index];  
//       this.fileName = file.name +" is uploaded"
     
//      this.files.push({ data: file, inProgress: false, progress: 0});  
//     }  
//       this.uploadFiles();  
//     };  
//     fileUpload.click();  
// }
// private uploadFiles() {  
//   this.fileUpload.nativeElement.value = '';  
//   this.files.forEach(file => {  
//     this.uploadFile(file);  
//   });  
// }
onClick() {  
  const formData = new FormData();  
  formData.append('myFile', this.fileNeedtoUpload);
  let str=['aa','bb','cc'];  
  const req= new Fileuploadrequest();
  req.specialA="SpecialA";
  req.specialBNumber=789;
  req.specialCArr=str
  formData.append("userName",'Jayanta Ghosh');
  formData.append("IdNumber",'1234');
  formData.append("arr",str.toString());
  formData.append("special",JSON.stringify(req));

 // formData.append("other",req.otherInfo);
  this.fileUploadService.upload(formData).subscribe(
    rsp => {
      console.log(rsp.type)


     
},
    error => {
      console.log(error)
    });

}




fileDTO:FileDTO=new FileDTO();
onFileSelectionwithDTO(e){

    this.fileDTO=null;
    this.fileDTO.file= e.target.files[0];
    this.fileDTO.specialA="SpAAA";
    this.fileDTO.specialBNumber=789;
    this.fileDTO.specialCArr=['don','is','here'];

  }

  onClickForDTO(){

  
   // formData.append("other",req.otherInfo);
    this.fileUploadService.uploadDTO(this.fileDTO).subscribe(
      rsp => {
        console.log(rsp.type)
  
  
       
  },
      error => {
        console.log(error)
      });
  }

}
