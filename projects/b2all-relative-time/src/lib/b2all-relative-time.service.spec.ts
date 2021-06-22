import { TestBed } from '@angular/core/testing';

import { B2allRelativeTimeService } from './b2all-relative-time.service';

describe('B2allRelativeTimeService', () => {
  let service: B2allRelativeTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(B2allRelativeTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
