import { AppModule } from './../../../app.module';
import { CoreModule } from './../../../core/core.module';
import { MarvelModule } from './../../marvel.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailComponent } from './character-detail.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CharacterDetailComponent', () => {
  let component: CharacterDetailComponent;
  let fixture: ComponentFixture<CharacterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MarvelModule, CoreModule, AppModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
