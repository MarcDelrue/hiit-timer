import { TestBed } from '@angular/core/testing';

import { HiitDataService } from './hiit-data.service';

describe('HiitDataService', () => {
  let service: HiitDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HiitDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
