import { TestBed } from '@angular/core/testing';

import { NomStatusService } from './nom-status.service';

describe('NomStatusService', () => {
  let service: NomStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
