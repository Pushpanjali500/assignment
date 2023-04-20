import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuContainerSectionComponent } from './menu-container-section.component';

describe('MenuContainerSectionComponent', () => {
  let component: MenuContainerSectionComponent;
  let fixture: ComponentFixture<MenuContainerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuContainerSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuContainerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
