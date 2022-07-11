import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalResultComponent } from './cal-result.component';

describe('CalResultComponent', () => {
  let component: CalResultComponent;
  let fixture: ComponentFixture<CalResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
