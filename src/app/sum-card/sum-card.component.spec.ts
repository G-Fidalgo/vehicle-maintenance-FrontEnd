import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumCardComponent } from './sum-card.component';

describe('SumCardComponent', () => {
  let component: SumCardComponent;
  let fixture: ComponentFixture<SumCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
