import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbTripComponent } from './tb-trip.component';

describe('TbTripComponent', () => {
  let component: TbTripComponent;
  let fixture: ComponentFixture<TbTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
