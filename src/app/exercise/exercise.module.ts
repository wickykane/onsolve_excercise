import { ExerciseRoutingModule } from './exercise-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseComponent } from './exercise.component';

import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import { ExerciseOneComponent } from './pages/exercise-one/exercise-one.component';
import { RemoveVowelPipe } from './pipes/remove-vowel.pipe';
import { FormsModule } from '@angular/forms';
import { ExerciseTwoComponent } from './pages/exercise-two/exercise-two.component';

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
