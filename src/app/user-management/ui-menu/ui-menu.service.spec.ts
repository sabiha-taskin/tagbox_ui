import { TestBed, inject } from '@angular/core/testing';

import { UiMenuService } from './ui-menu.service';

describe('UiMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UiMenuService]
    });
  });

  it('should be created', inject([UiMenuService], (service: UiMenuService) => {
    expect(service).toBeTruthy();
  }));
});
