import { TestBed } from '@angular/core/testing';

import { NgxPulseService } from './ngx-pulse.service';

describe('NgxPulseService', () => {
  let service: NgxPulseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPulseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
