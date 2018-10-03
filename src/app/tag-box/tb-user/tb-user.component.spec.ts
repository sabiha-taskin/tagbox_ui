import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbUserComponent } from './tb-user.component';

describe('TbUserComponent', () => {
  let component: TbUserComponent;
  let fixture: ComponentFixture<TbUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
