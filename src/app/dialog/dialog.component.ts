import { Component } from '@angular/core';
import {intern_update} from "../internship/internship.model";
import { SharedService} from "../shared/shared.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(private shared:SharedService) {
  }
  message = new intern_update('','','')

  // receiveMessage(rec:intern_update){
  //   this.message = rec
  // }

  ngOnInit():void{
    this.message = this.shared.getMessage()
  }
}
