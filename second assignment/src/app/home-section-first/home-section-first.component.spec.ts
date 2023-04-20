import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionFirstComponent } from './home-section-first.component';

describe('HomeSectionFirstComponent', () => {
  let component: HomeSectionFirstComponent;
  let fixture: ComponentFixture<HomeSectionFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSectionFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSectionFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
