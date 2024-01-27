import { Injectable } from '@angular/core';
import { PercentageChart } from '../models/percentageChart';
import { percentageChartData } from '../constants/percentageChartData';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PercentageChartService {
  PercentageCharts$: BehaviorSubject<PercentageChart[]>;
  PercentageCharts: Array<PercentageChart> = [];

  constructor() {
    this.PercentageCharts$ = new BehaviorSubject<PercentageChart[]>([]);
    this.PercentageCharts = percentageChartData;
  }

  getAll() {
    this.PercentageCharts$.next(this.PercentageCharts);
  }

  add(PercentageChart: PercentageChart) {
    this.PercentageCharts.push(PercentageChart);
  }
}
