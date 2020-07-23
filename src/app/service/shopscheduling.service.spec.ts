import { TestBed } from '@angular/core/testing';

import { ShopschedulingService } from './shopscheduling.service';

describe('ShopschedulingService', () => {
  let service: ShopschedulingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopschedulingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
