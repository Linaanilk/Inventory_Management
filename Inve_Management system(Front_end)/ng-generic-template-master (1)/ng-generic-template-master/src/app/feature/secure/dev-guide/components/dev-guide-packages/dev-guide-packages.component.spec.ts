import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevGuidePackagesComponent } from './dev-guide-packages.component';

describe('DevGuidePackagesComponent', () => {
  let component: DevGuidePackagesComponent;
  let fixture: ComponentFixture<DevGuidePackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevGuidePackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevGuidePackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
