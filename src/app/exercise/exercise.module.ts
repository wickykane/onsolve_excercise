import { ExerciseRoutingModule } from './exercise-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseComponent } from './exercise.component';

import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import { RemoveVowelPipe } from './pipes/remove-vowel.pipe';
import { FormsModule } from '@angular/forms';
import { ExerciseOneComponent, ExerciseTwoComponent } from './pages';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ExerciseRoutingModule,
    NgbTabsetModule
  ],
  declarations: [ExerciseComponent, ExerciseOneComponent, RemoveVowelPipe, ExerciseTwoComponent]
})
export class ExerciseModule { }
