import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';

@Component({
  selector: 'app-stepperinput',
  templateUrl: './stepperinput.component.html',
  styleUrls: ['./stepperinput.component.css'],
})
export class StepperinputComponent {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({firstCtrl: ['']});
    this.secondFormGroup = this._formBuilder.group({secondCtrl: ['']});

  }

  selectedDate: Date | null = null;
  formattedDate: string = "";


}
