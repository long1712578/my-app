import { TestBed } from '@angular/core/testing';

import { HttpServiceApiService } from './http-service-api.service';

describe('HttpServiceApiService', () => {
  let service: HttpServiceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpServiceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
