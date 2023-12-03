import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationThreeComponent } from './verification-three.component';

describe('VerificationThreeComponent', () => {
  let component: VerificationThreeComponent;
  let fixture: ComponentFixture<VerificationThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
