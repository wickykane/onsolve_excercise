import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'exercise' },
  {
    path: 'exercise',
    loadChildren: './exercise/exercise.module#ExerciseModule'
  },
  {
    path: 'marvel',
    loadChildren: './marvel/marvel.module#MarvelModule'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
