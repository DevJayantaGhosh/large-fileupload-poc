import { Component } from '@angular/core';
import { FileuploadService } from './fileupload.service';
import { Fileuploadrequest } from './fileuploadrequest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';



  genericFunction(parameter1:string, parameter2:string,ptr:any,calbackFn:any){
    console.log("parameter1 passed here is ---"+parameter1);
    console.log("parameter1 passed here is ---"+parameter1);
    calbackFn(ptr);
  }


//   constructor(private fileService:FileuploadService){

//   }

// req:Fileuploadrequest=new Fileuploadrequest();

//   onFileSelection(e){
//     alert(e.target.files[0].size);
//     this.req.file=e.target.files[0];
//   }

//   send(){
//     this.req.userName="Jayanta";
//     this.req.otherInfo="other info....";
//     alert(JSON.stringify(this.req))
//     this.fileService.uploadFileWithDetails(this.req).subscribe(x=>{
//       console.log(x);
//     })

//   }
//   chk(){
//     this.fileService.check().subscribe(x=>alert(x));
//   }
}
