import { SharedModule } from './../shared/shared.module';
import { MarvelRoutingModule } from './marvel-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MarvelHomeComponent, CharacterDetailComponent } from './pages';
import { MarvelHeaderComponent, MarvelFooterComponent } from './components';
import { MarvelComponent } from './marvel.component';
import { HotkeyModule } from 'angular2-hotkeys';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TextTruncatePipe } from './pipes';


@NgModule({
  imports: [CommonModule, FormsModule, MarvelRoutingModule, HotkeyModule, SharedModule, NgbPaginationModule],
  declarations: [
    MarvelComponent,
    MarvelHomeComponent,
    MarvelHeaderComponent,
    MarvelFooterComponent,
    CharacterDetailComponent,
    TextTruncatePipe
  ],
})
export class MarvelModule {}
