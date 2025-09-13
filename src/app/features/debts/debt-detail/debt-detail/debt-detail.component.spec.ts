import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtDetailComponent } from './debt-detail.component';

describe('DebtDetailComponent', () => {
  let component: DebtDetailComponent;
  let fixture: ComponentFixture<DebtDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebtDetailComponent]
    });
    fixture = TestBed.createComponent(DebtDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
