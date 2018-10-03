import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbReportComponent } from './tb-report.component';

describe('TbReportComponent', () => {
  let component: TbReportComponent;
  let fixture: ComponentFixture<TbReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
