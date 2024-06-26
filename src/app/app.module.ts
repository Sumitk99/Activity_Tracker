import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';  // Import MatCardModule
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepicker, MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import { InternshipComponent } from './internship/internship.component';
import { MatButtonModule } from "@angular/material/button";
import {MatButtonToggle, MatButtonToggleModule} from "@angular/material/button-toggle";
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { LanguageComponent } from './language/language.component';
import { FrameworksComponent } from './frameworks/frameworks.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog, MatDialogModule} from "@angular/material/dialog";
import { HeaderComponent } from './header/header.component';
import { DatabaseComponent } from './database/database.component';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { JsonPipe } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { StepperinputComponent } from './internship/stepperinput/stepperinput.component';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    InternshipComponent,
    LanguageComponent,
    FrameworksComponent,
    DialogComponent,
    HeaderComponent,
    DatabaseComponent,
    StepperinputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    FormsModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatCheckboxModule,
    JsonPipe,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
