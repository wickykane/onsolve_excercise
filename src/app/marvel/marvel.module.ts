import { SharedModule } from './../shared/shared.module';
import { MarvelRoutingModule } from './marvel-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MarvelHomeComponent } from './pages';
import { MarvelHeaderComponent, MarvelFooterComponent } from './components';

import { RemoveVowelPipe } from './pipes/remove-vowel.pipe';
import { MarvelComponent } from './marvel.component';
import { HotkeyModule } from 'angular2-hotkeys';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, FormsModule, MarvelRoutingModule, HotkeyModule, SharedModule, NgbPaginationModule],
  declarations: [
    MarvelComponent,
    MarvelHomeComponent,
    MarvelHeaderComponent,
    MarvelFooterComponent,
    RemoveVowelPipe
  ],
})
export class MarvelModule {}
