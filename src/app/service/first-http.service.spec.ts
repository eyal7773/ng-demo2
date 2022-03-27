import { TestBed } from '@angular/core/testing';

import { FirstHttpService } from './first-http.service';

describe('FirstHttpService', () => {
  let service: FirstHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
