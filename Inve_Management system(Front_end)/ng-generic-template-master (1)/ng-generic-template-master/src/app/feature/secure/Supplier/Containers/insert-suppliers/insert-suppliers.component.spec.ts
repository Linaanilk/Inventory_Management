import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertSuppliersComponent } from './insert-suppliers.component';

describe('InsertSuppliersComponent', () => {
  let component: InsertSuppliersComponent;
  let fixture: ComponentFixture<InsertSuppliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertSuppliersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
