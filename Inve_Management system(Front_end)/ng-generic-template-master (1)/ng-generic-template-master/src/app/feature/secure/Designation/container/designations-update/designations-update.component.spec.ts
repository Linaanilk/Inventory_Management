import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationsUpdateComponent } from './designations-update.component';

describe('DesignationsUpdateComponent', () => {
  let component: DesignationsUpdateComponent;
  let fixture: ComponentFixture<DesignationsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignationsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignationsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
