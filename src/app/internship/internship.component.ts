import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { intern_update } from "./internship.model";
import { MatSnackBar} from "@angular/material/snack-bar";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";
import { SharedService} from "../shared/shared.service";
import {FormBuilder, FormGroup} from "@angular/forms";

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
  show_entry  = false
  updates:intern_update[]= [new intern_update("2001-01-01", "Day 1", ["Complete Internship Profile", "Write API with sql", "Write API with MongoDB"],[true, true, false],2)]

  constructor(private snackbar: MatSnackBar, public dialog: MatDialog, private shared:SharedService, private _formBuilder: FormBuilder) {
    setTimeout(() => {
        this.show_ip = true
      }
      , 0
    )
  }

  new_entry(messege:string, action:string){
    this.snackbar.open(messege, action, {duration:2000});
    this.updates.push(new intern_update(this.formattedDate, this.day_input,[this.tasks_input], [],0))
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
    this.selectedValue  = 'show'
    this.create_entry = false
    this.show_entry = !this.show_entry
  }
  onAddEntry(){
    this.selectedValue = 'create'
    this.show_entry = false
    this.create_entry = !this.create_entry
  }

  openDialog(n:number){
    console.log(n, this.updates[n])
    this.shared.setMessage(this.updates[n])
    this.dialog.open(DialogComponent, {
    });
  }

  ngOnInit(): void {
  }

  selectedValue: string = 'create';

}

