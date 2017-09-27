import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextQuestionComponent } from './next-question.component';

describe('NextQuestionComponent', () => {
  let component: NextQuestionComponent;
  let fixture: ComponentFixture<NextQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
