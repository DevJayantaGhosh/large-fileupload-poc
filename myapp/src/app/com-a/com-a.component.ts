import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LargeProcessing } from '../common/large-processing';
import { DataInfo } from '../model/model-store';

@Component({
  selector: 'app-com-a',
  templateUrl: './com-a.component.html',
  styleUrls: ['./com-a.component.css']
})
export class ComAComponent implements OnInit {


  mydataInfo:DataInfo;//need new 
  largeProcess: LargeProcessing;//new new
  subscription:Observable<boolean>;

  constructor() { }

  ngOnInit(): void {
    this.largeProcess=new LargeProcessing();//that object of main process class
    this.mydataInfo=new DataInfo();//the object which yo want to pass 
    this.mydataInfo.dataArr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
    this.mydataInfo.dataSize= this.mydataInfo.dataArr.length;
    this.mydataInfo.processedData=0;
  }


  startProcess(){
   alert("uuu-start")
    this.largeProcess.setLargeData(this.mydataInfo);

    this.subscription=this.largeProcess.initiateDataProcess();
    this.subscription.subscribe(x=>{
      if(x==true){
        alert("DONEEEEE")
      }
    })


  }


}
