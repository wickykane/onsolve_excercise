import { MarvelModule } from '../../marvel.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelHomeComponent } from './marvel-home.component';
import { CoreModule } from 'src/app/core/core.module';
import { AppModule } from 'src/app/app.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('MarvelHomeComponent', () => {
  let component: MarvelHomeComponent;
  let fixture: ComponentFixture<MarvelHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MarvelModule, CoreModule, AppModule, RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
