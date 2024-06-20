import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevGuideModalsComponent } from './dev-guide-modals.component';

describe('DevGuideModalsComponent', () => {
  let component: DevGuideModalsComponent;
  let fixture: ComponentFixture<DevGuideModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevGuideModalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevGuideModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
