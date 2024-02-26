import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardamuellesGuard } from './guardamuelles.guard';

describe('guardamuellesGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardamuellesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
