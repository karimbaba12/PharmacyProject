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
  constructor(private authService: AuthService,public translate :TranslateService) {
translate.addLangs(['en','es']),
translate.setDefaultLang('en')
  }
  isloggedin() {
    return this.authService.isAuthenticatedUser();
  }
  sideopened: boolean = true;
  openside(e: any) {
    this.sideopened = !this.sideopened;

  }


  titles = 'multilingualapp';
  switchLanguage(lang:string){
    this.translate.use(lang)





}
}
