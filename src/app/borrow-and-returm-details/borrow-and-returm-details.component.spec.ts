import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowAndReturmDetailsComponent } from './borrow-and-returm-details.component';

describe('BorrowAndReturmDetailsComponent', () => {
  let component: BorrowAndReturmDetailsComponent;
  let fixture: ComponentFixture<BorrowAndReturmDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorrowAndReturmDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowAndReturmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
