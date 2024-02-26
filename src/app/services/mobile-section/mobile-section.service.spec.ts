import { TestBed } from '@angular/core/testing';

import { MobileSectionService } from './mobile-section.service';

describe('MobileSectionService', () => {
  let service: MobileSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
