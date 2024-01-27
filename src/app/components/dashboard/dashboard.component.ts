import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { percentageChartData } from 'src/app/core/constants/percentageChartData';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private authService: AuthService, private router: Router) {}
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  chartOptions = {
    animationEnabled: true,
    title: {
      text: 'Best seller by our Pharmacy',
    },
    data: [
      {
        type: 'pie',
        startAngle: -90,
        indexLabel: '{name}: {y}',
        yValueFormatString: "#,###.##'%'",
        dataPoints: percentageChartData, //[
        //   { y: 14.1, name: 'Antibiotics' },
        //   { y: 28.2, name: 'Panadol' },
        //   { y: 14.4, name: 'Dienxit' },
        //   { y: 20, name: 'Panamax' },
        // ],
      },
    ],
  };
  // }

  more() {
    this.router.navigate(['/piechart']);
  }

  nav() {
    this.router.navigate(['/navbar']);
  }

}
