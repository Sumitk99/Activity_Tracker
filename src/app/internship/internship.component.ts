import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { intern_update } from "./internship.model";
import { MatSnackBar} from "@angular/material/snack-bar";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";
import { SharedService} from "../shared/shared.service";

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css'],
})
export class InternshipComponent implements OnInit {
  create_entry_clicked = false
  show_ip = false
  create_entry = this.create_entry_clicked && this.show_ip
  day_input:string = "";
  selectedDate: Date | null = null;
  formattedDate: string = "";
  tasks_input:string = "";
  add_button_status = false
  dialogNo:number = 0
  show_entry  = false
  updates:intern_update[]= [new intern_update("1/1/2001", "Day 1", "Complete Internship Profile")]
  dataSend:intern_update = new intern_update('','','')

  noOfEntries = 1
  @Output() event = new EventEmitter<intern_update>()
  constructor(private snackbar: MatSnackBar, public dialog: MatDialog, private shared:SharedService) {
    setTimeout(() => {
        this.show_ip = true
      }
      , 2000
    )
  }

  new_entry(messege:string, action:string){
    this.snackbar.open(messege, action, {duration:2000});
    this.noOfEntries++
    this.updates.push(new intern_update(this.formattedDate, this.day_input,this.tasks_input))
  }
  public onUpdateDay(event: Event){
    this.day_input = (<HTMLInputElement>event.target).value;
    if(this.day_input.length == 0 || this.tasks_input.length == 0){
      this.add_button_status = false
    }
    else{
      this.add_button_status = true
    }
  }
  public onUpdateTask(event: Event){
    this.tasks_input = (<HTMLInputElement>event.target).value;
    if(this.day_input.length == 0 || this.tasks_input.length == 0){
      this.add_button_status = false
    }
    else{
      this.add_button_status = true
    }
  }
  public onUpdateDate(event: any){
    if (this.selectedDate) {
      this.formattedDate = this.selectedDate.toLocaleDateString('en-CA'); // Format as 'yyyy-MM-dd'
    } else {
      this.formattedDate = "";
    }
    if(this.day_input || this.tasks_input.length == 0){
      this.add_button_status = false
    }
    else{
      this.add_button_status = true
    }
  }

  onShowEntry(){
    this.create_entry = false
    this.show_entry = !this.show_entry
  }
  onAddEntry(){
    this.show_entry = false
    this.create_entry = !this.create_entry
  }

  openDialog(event:Event){
    const button = event.target as HTMLButtonElement;
    const buttonText = button.innerText || button.textContent;

    console.log(buttonText);
    let n = 0
    // @ts-ignore
    for(let i = buttonText.length - 1, j = 0; i >= 0 && buttonText[i] != ' '; i--, j++){
      // @ts-ignore
      let x = buttonText.charAt(i) - '0';
      n = n + (Math.pow(10, j)*x)
    }
    console.log(n-1, buttonText)
    // @ts-ignore
    if(buttonText.length == 0){
      this.dataSend = new intern_update('Cannot fetch data','','')
    }
    else{
      this.dataSend = this.updates[n-1]
    }
    this.shared.setMessage(this.dataSend)
    this.dialog.open(DialogComponent);
  }




  ngOnInit(): void {
  }


}

