import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewDashboardComponent } from './overview-dashboard.component';

describe('OverviewDashboardComponent', () => {
  let component: OverviewDashboardComponent;
  let fixture: ComponentFixture<OverviewDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
