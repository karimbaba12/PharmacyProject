import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { loginGuard } from './core/guards/login.guard';
import { PersonComponent } from './components/person/person.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { DateTableComponent } from './components/date-table/date-table.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [loginGuard],
  },
  {
    path: 'person',
    component: PersonComponent,
    canActivate: [authGuard],
  },
  {
    path: 'breadcrumb',
    component: BreadCrumbComponent,
  },
  {
    path: 'dateTable',
    component: DateTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
