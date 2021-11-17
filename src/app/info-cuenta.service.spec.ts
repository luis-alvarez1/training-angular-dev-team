import { TestBed } from '@angular/core/testing';

import { InfoCuentaService } from './info-cuenta.service';

describe('InfoCuentaService', () => {
  let service: InfoCuentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoCuentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
