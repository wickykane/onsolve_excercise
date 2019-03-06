import { ExerciseRoutingModule } from './exercise-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseComponent } from './exercise.component';

import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import { ExerciseOneComponent } from './pages/exercise-one/exercise-one.component';

@NgModule({
  imports: [
    CommonModule,
    ExerciseRoutingModule,
    NgbTabsetModule
  ],
  declarations: [ExerciseComponent, ExerciseOneComponent]
})
export class ExerciseModule { }
