import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {intern_update} from "../internship.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'app-stepperinput',
  templateUrl: './stepperinput.component.html',
  styleUrls: ['./stepperinput.component.css'],
})
export class StepperinputComponent {
  // firstFormGroup!: FormGroup;
  // secondFormGroup!: FormGroup;
  // thirdFormGroup!: FormGroup;
  // constructor(private snackbar: MatSnackBar, public dialog: MatDialog, private shared:SharedService,private _formBuilder: FormBuilder) {
  //   this.firstFormGroup = this._formBuilder.group({firstCtrl: ['']});
  //   this.secondFormGroup = this._formBuilder.group({secondCtrl: ['']});
  //   this.thirdFormGroup = this._formBuilder.group({thirdCtrl: ['']});
  // }
  //
  //
  // create_entry_clicked = false
  // show_ip = false
  // create_entry = this.create_entry_clicked && this.show_ip
  // day_input:string = "";
  // selectedDate: Date | null = null;
  // formattedDate: string = "";
  // tasks_input:string = "";
  // add_button_status = false
  // dataSend:intern_update = new intern_update('','','')
  //
  // new_entry(messege:string, action:string){
  //   this.snackbar.open(messege, action, {duration:2000});
  //   // this.updates.push(new intern_update(this.formattedDate, this.day_input,this.tasks_input))
  //   this.shared.sendMessage(new intern_update(this.formattedDate, this.day_input, this.tasks_input))
  // }
  // public onUpdateDay(event: Event){
  //   this.day_input = (<HTMLInputElement>event.target).value;
  //   this.add_button_status = !(this.day_input.length == 0 || this.tasks_input.length == 0 || this.formattedDate.length == 0);
  // }
  // public onUpdateTask(event: Event){
  //   this.tasks_input = (<HTMLInputElement>event.target).value;
  //   this.add_button_status = !(this.day_input.length == 0 || this.tasks_input.length == 0 || this.formattedDate.length == 0);
  // }
  // public onUpdateDate(event: any){
  //   if (this.selectedDate) {
  //     this.formattedDate = this.selectedDate.toLocaleDateString('en-CA'); // Format as 'yyyy-MM-dd'
  //   } else {
  //     this.formattedDate = "";
  //   }
  //   this.add_button_status = !(this.day_input.length == 0 || this.tasks_input.length == 0 || this.formattedDate.length == 0);
  // }

}
