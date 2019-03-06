import { ExerciseRoutingModule } from './exercise-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseComponent } from './exercise.component';

@NgModule({
  imports: [
    CommonModule,
    ExerciseRoutingModule
  ],
  declarations: [ExerciseComponent]
})
export class ExerciseModule { }
