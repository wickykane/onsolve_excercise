import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseOneComponent } from './exercise-one.component';

describe('ExerciseOneComponent', () => {
  let component: ExerciseOneComponent;
  let fixture: ComponentFixture<ExerciseOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
