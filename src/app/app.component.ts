import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private authService: AuthService, private translateService:TranslateService) {

    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang')||'en')
  }
  isloggedin() {
    return this.authService.isAuthenticatedUser();
  }
  sideopened: boolean = true;
  openside(e: any) {
    this.sideopened = !this.sideopened;
  }


}
