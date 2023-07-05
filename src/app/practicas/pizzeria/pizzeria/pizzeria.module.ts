import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzeriaComponent } from '../pizzeria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { confirmAlertComponent } from '../confirm-alert/confirm-alert.component';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    PizzeriaComponent,
    confirmAlertComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  exports:[
    PizzeriaComponent
  ]
})
export class PizzeriaModule { }
