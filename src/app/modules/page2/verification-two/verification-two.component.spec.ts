import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationTwoComponent } from './verification-two.component';

describe('VerificationTwoComponent', () => {
  let component: VerificationTwoComponent;
  let fixture: ComponentFixture<VerificationTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
