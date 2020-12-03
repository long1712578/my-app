import { TestBed } from '@angular/core/testing';

import { HttpGetServicesService } from './http-get-services.service';

describe('HttpGetServicesService', () => {
  let service: HttpGetServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpGetServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
