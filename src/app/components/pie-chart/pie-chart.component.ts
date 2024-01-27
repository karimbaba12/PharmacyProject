import { PercentageChartService } from './../../core/services/percentage-chart.service';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { percentageChartData } from 'src/app/core/constants/percentageChartData';
import { PercentageChart } from 'src/app/core/models/percentageChart';
import { ChartFormComponent } from '../chart-form/chart-form.component';
import { ConfirmationDialogueComponent } from '../confirmation-dialogue/confirmation-dialogue.component';
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









//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;

//   public displayedColumns: string[] = ['firstName', 'age', 'job'];
//   public columnsToDisplay: string[] = [...this.displayedColumns, 'actions'];

//   /**
//    * it holds a list of active filter for each column.
//    * example: {firstName: {contains: 'person 1'}}
//    *
//    */
//   public columnsFilters = {};

//   public dataSource: MatTableDataSource<PercentageChart>;
//   private serviceSubscribe!: Subscription;

//   constructor(private PercentageChartService: PercentageChartService, public dialog: MatDialog) {
//     this.dataSource = new MatTableDataSource<PercentageChart>();
//   }

//   edit(data: PercentageChart) {
//     const dialogRef = this.dialog.open(ChartFormComponent, {
//       width: '400px',
//       data: data,
//     });

//     dialogRef.afterClosed().subscribe((result) => {
//       if (result) {
//         this.PercentageChartService.edit(result);
//       }
//     });
//   }

//   delete(id: any) {
//     const dialogRef = this.dialog.open(ConfirmationDialogueComponent);

//     dialogRef.afterClosed().subscribe((result) => {
//       if (result) {
//         this.PercentageChartService.remove(id);
//       }
//     });
//   }

//   ngAfterViewInit(): void {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//   }

//   /**
//    * initialize data-table by providing persons list to the dataSource.
//    */
//   ngOnInit(): void {
//     this.PercentageChartService.getAll();
//     this.serviceSubscribe = this.PercentageChartService.PercentageCharts$.subscribe((res) => {
//       this.dataSource.data = res;
//     });
//   }

//   ngOnDestroy(): void {
//     this.serviceSubscribe.unsubscribe();
//   }
// }
}
