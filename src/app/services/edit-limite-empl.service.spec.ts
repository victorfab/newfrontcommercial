import { TestBed } from '@angular/core/testing';

import { EditLimiteEmplService } from './edit-limite-empl.service';

describe('EditLimiteEmplService', () => {
  let service: EditLimiteEmplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditLimiteEmplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
