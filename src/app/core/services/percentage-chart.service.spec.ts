import { TestBed } from '@angular/core/testing';

import { PercentageChartService } from './percentage-chart.service';

describe('PercentageChartService', () => {
  let service: PercentageChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PercentageChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
