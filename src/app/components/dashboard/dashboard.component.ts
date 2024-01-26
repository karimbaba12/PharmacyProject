import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

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
      text: 'Sales by Department',
    },
    data: [
      {
        type: 'pie',
        startAngle: -90,
        indexLabel: '{name}: {y}',
        yValueFormatString: "#,###.##'%'",
        dataPoints: [
          { y: 14.1, name: 'Antibiotics' },
          { y: 28.2, name: 'Panadol' },
          { y: 14.4, name: 'Dienxit' },
          { y: 0, name: 'Panamax' },
        ],
      },
    ],
  };
  // }
}
