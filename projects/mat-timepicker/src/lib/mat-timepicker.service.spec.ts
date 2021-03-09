import { TestBed } from '@angular/core/testing';

import { MatTimepickerService } from './mat-timepicker.service';

describe('MatTimepickerService', () => {
  let service: MatTimepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatTimepickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
