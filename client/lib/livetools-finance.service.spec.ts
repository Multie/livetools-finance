import { TestBed } from '@angular/core/testing';

import { LivetoolsFinanceService } from './livetools-finance.service';

describe('LivetoolsFinanceService', () => {
  let service: LivetoolsFinanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivetoolsFinanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
