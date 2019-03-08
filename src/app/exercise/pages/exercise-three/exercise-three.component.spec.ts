import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseThreeComponent } from './exercise-three.component';

describe('ExerciseThreeComponent', () => {
  let component: ExerciseThreeComponent;
  let fixture: ComponentFixture<ExerciseThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    document.body.removeChild(fixture.debugElement.nativeElement);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
