import { Component } from '@angular/core';
import { percentageChartData } from 'src/app/core/constants/percentageChartData';
import { PercentageChart } from 'src/app/core/models/percentageChart';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  //   incrementValue() {
  //     throw new Error('Method not implemented.');
  //   }
  //   chartOptions = {
  //     animationEnabled: true,
  //     title: {
  //       text: 'Best seller by our Pharmacy',
  //     },
  //     data: [
  //       {
  //         type: 'pie',
  //         startAngle: -90,
  //         indexLabel: '{name}: {y}',
  //         yValueFormatString: "#,###.##'%'",
  //         dataPoints: percentageChartData,  //[
  //         //   { y: 14.1, name: 'panadol' },
  //         //   { y: 28.2, name: 'panamax' },
  //         //   { y: 14.4, name: 'antibiotic' },
  //         //   { y: 43.3, name: 'flagile' },

  //         // ],
  //       },
  //     ],
  //   };
  chartOptions = {
    title: {
      text: 'Monthly Sales Data',
    },
    theme: 'light2',
    animationEnabled: true,
    exportEnabled: true,
    axisY: {
      includeZero: true,
      valueFormatString: '$#,##0k',
    },
    data: [
      {
        type: 'column', //change type to bar, line, area, pie, etc
        yValueFormatString: '$#,##0k',
        color: '#01b8aa',
        dataPoints: percentageChartData,
      },
    ],
  };
}
