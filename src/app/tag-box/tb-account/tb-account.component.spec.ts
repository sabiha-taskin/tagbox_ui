import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbAccountComponent } from './tb-account.component';

describe('TbAccountComponent', () => {
  let component: TbAccountComponent;
  let fixture: ComponentFixture<TbAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
