import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevGuideSkeletonsComponent } from './dev-guide-skeletons.component';

describe('DevGuideSkeletonsComponent', () => {
  let component: DevGuideSkeletonsComponent;
  let fixture: ComponentFixture<DevGuideSkeletonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevGuideSkeletonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevGuideSkeletonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
