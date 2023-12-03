import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterFourComponent } from './letter-four.component';

describe('LetterFourComponent', () => {
  let component: LetterFourComponent;
  let fixture: ComponentFixture<LetterFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
