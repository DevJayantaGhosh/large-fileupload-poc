import { BehaviorSubject, Observable } from "rxjs";
import { DataInfo } from "../model/model-store"

export class LargeProcessing {

    LargeDataForProcess:{
        chunkSize:number,
        dataInfo:DataInfo
    }

    constructor() { 
 
        this.LargeDataForProcess={
            chunkSize:5,
            dataInfo:null
        }
    }
    setLargeData(dataInfo:DataInfo){
        this.LargeDataForProcess.dataInfo=dataInfo;
    }

    private subject:BehaviorSubject<boolean>=new BehaviorSubject(false);//  need new as it pass data to other

    initiateDataProcess():Observable<boolean>{
      console.log("Initiate Process--------------------")
      this.startChunking();  
      console.log("waiting for subject to get data then I will return")
      return this.subject.asObservable();
    }//this is the  method that communicate with comp-A
    startChunking(){

            let dataAr= this.LargeDataForProcess.dataInfo.dataArr;
                if(dataAr.length>this.LargeDataForProcess.chunkSize){
                    let chunk=dataAr.splice(0,this.LargeDataForProcess.chunkSize);
                    //alert(JSON.stringify(chunk))
                    this.uploadData(chunk);
                }else{
                    let chunk=dataAr.splice(0,this.LargeDataForProcess.chunkSize);
                    //alert(JSON.stringify(chunk))
                   // let chunk=dataAr.splice(this.LargeDataForProcess.dataInfo.processedData-1,this.LargeDataForProcess.dataInfo.processedData+remaining);
                    this.uploadLastData(chunk);
                    return;
                }
 
    
    }


    uploadData(chunkArr:number[]){
        //alert("uploadData")
        console.log("===============Start=============")
        chunkArr.forEach(x=>console.log(x+"-------------->"))
        this.LargeDataForProcess.dataInfo.processedData=this.LargeDataForProcess.dataInfo.processedData+this.LargeDataForProcess.chunkSize;
        console.log("===============End=============")
        this.startChunking();
    }

    uploadLastData(chArr:number[]){
        //alert("uploadLastData")
        console.log("===============Start Last Upload=============")
        chArr.forEach(x=>console.log(x+"-------------->"))
        this.LargeDataForProcess.dataInfo.processedData=this.LargeDataForProcess.dataInfo.processedData+this.LargeDataForProcess.chunkSize;
        console.log("===============End==Last Upload============")
        this.subject.next(true);
    }

}

// startChunking---->uploadData  then uploadData--->startChunking
// if last call ->   uploadLastData---> subject.next()

//A--------------------------------------======================================================->B
//this.largeProcess=new LargeProcessing();//that object of main process class       |
//this.mydataInfo=new DataInfo();//the object which yo want to pass                 |           private subject:BehaviorSubject<boolean>=new BehaviorSubject(false);