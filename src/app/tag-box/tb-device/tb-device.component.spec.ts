import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbDeviceComponent } from './tb-device.component';

describe('TbDeviceComponent', () => {
  let component: TbDeviceComponent;
  let fixture: ComponentFixture<TbDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
