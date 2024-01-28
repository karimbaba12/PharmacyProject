import { PersonFormDialogComponent } from './components/person-form-dialogue/person-form-dialogue.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './shared/modules/material/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ToastrModule } from 'ngx-toastr';
import { HighlightDirective } from './core/directives/highlight.directive';
import { SquarePipe } from './core/pipes/square.pipe';
import { PersonComponent } from './components/person/person.component';
import { ConfirmationDialogueComponent } from './components/confirmation-dialogue/confirmation-dialogue.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { DateTableComponent } from './components/date-table/date-table.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidenavComponent,
    ToolbarComponent,
    HighlightDirective,
    SquarePipe,
    PersonComponent,
    ConfirmationDialogueComponent,
    PersonFormDialogComponent,
    BreadCrumbComponent,
    DateTableComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ToastrModule.forRoot(),
    CanvasJSAngularChartsModule,

    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
