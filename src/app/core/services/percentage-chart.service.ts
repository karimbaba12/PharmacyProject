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


  edit(person: PercentageChart) {
    let findElem = this.PercentageCharts.find((p) => p.y == PercentageChart.y);
    findElem!.y = PercentageChart.y;
    findElem!.name = PercentageChart.name;
    this.PercentageCharts$.next(this.PercentageCharts);
  }

  remove(y: number) {
    this.PercentageCharts = this.PercentageCharts.filter((p) => {
      return p.y != y;
    });

    this.PercentageCharts$.next(this.PercentageCharts);
  }
}

