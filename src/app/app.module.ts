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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
