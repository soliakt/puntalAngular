import { TestBed } from '@angular/core/testing';

import { ApiLaravelService } from './api-laravel.service';

describe('ApiLaravelService', () => {
  let service: ApiLaravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiLaravelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
