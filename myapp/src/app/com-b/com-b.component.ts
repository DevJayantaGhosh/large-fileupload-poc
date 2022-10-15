import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-com-b',
  templateUrl: './com-b.component.html',
  styleUrls: ['./com-b.component.css']
})
export class ComBComponent implements OnInit {

  constructor(private app :AppComponent) { }

  ngOnInit(): void {
  }

  
  TriggerGenericFromB(){
    this.app.genericFunction("BBBB","BBBBBBBaaaaaa",this,this.callBackfromB);
    }
  
    callBackfromB(ptr){//ptr is needed if you want to access any obj of this class
      console.log("callBackfromB-------");
      console.log("yyyyyyyyyBBBBBBBBB");
    }
}
