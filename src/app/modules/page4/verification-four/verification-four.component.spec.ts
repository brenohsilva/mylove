import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationFourComponent } from './verification-four.component';

describe('VerificationFourComponent', () => {
  let component: VerificationFourComponent;
  let fixture: ComponentFixture<VerificationFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
