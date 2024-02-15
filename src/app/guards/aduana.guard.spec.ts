import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { aduanaGuard } from './aduana.guard';

describe('aduanaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => aduanaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
