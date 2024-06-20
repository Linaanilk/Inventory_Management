import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevGuideFormComponent } from './dev-guide-form.component';

describe('DevGuideFormComponent', () => {
  let component: DevGuideFormComponent;
  let fixture: ComponentFixture<DevGuideFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevGuideFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevGuideFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
