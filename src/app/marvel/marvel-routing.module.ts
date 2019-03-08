
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MarvelComponent } from './marvel.component';
import { MarvelHomeComponent } from './pages';

const routes: Routes = [
    { path: '', component: MarvelComponent, children:[
        { path: '', component: MarvelHomeComponent },
    ] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MarvelRoutingModule {}
