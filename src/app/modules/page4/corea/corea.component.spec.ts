import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreaComponent } from './corea.component';

describe('CoreaComponent', () => {
  let component: CoreaComponent;
  let fixture: ComponentFixture<CoreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
