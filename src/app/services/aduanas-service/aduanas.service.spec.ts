import { TestBed } from "@angular/core/testing";

import { AduanasService } from "./aduanas.service";

describe("AduanasService", () => {
  let service: AduanasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AduanasService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
