import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbDashboardComponent } from './tb-dashboard.component';

describe('TbDashboardComponent', () => {
  let component: TbDashboardComponent;
  let fixture: ComponentFixture<TbDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
