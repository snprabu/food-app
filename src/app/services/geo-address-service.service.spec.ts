import { TestBed } from '@angular/core/testing';

import { GeoAddressServiceService } from './geo-address-service.service';

describe('GeoAddressServiceService', () => {
  let service: GeoAddressServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoAddressServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
