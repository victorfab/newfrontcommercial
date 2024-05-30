import { TestBed } from '@angular/core/testing';

import { CuentaGeneralService } from './cuenta-general.service';

describe('CuentaGeneralService', () => {
  let service: CuentaGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuentaGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
