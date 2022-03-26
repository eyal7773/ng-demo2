import { TestBed } from '@angular/core/testing';

import { FirstRxService } from './first-rx.service';

describe('FirstRxService', () => {
  let service: FirstRxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstRxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
