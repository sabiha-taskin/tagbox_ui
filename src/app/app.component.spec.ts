import { TestBed, async } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing'
import { NgProgressModule } from 'ngx-progressbar';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

fdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SidebarComponent,
        NavbarComponent,
        FooterComponent
      ],
      imports: [ RouterTestingModule, NgProgressModule ]
    }).compileComponents();
  }));

  it('test', () => expect('test').toEqual('test'));

  it('Network connection available', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.isOnline).toBe(true, 'connected');
    app.isOnline = false;
    expect(app.isOnline).toBe(false, 'failed');
  });

  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));

  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).not.toEqual('app');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!!');
  // }));

});
