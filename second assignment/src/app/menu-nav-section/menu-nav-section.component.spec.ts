import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavSectionComponent } from './menu-nav-section.component';

describe('MenuNavSectionComponent', () => {
  let component: MenuNavSectionComponent;
  let fixture: ComponentFixture<MenuNavSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuNavSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuNavSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
