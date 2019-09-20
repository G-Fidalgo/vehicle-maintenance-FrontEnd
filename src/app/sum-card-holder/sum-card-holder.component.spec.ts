import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumCardHolderComponent } from './sum-card-holder.component';

describe('SumCardHolderComponent', () => {
  let component: SumCardHolderComponent;
  let fixture: ComponentFixture<SumCardHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumCardHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumCardHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
