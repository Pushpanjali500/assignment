import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzlesQuizzesComponent } from './puzzles-quizzes.component';

describe('PuzzlesQuizzesComponent', () => {
  let component: PuzzlesQuizzesComponent;
  let fixture: ComponentFixture<PuzzlesQuizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzlesQuizzesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuzzlesQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
