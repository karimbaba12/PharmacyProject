import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Output() issideopened = new EventEmitter<boolean>();
selectedLang: any;
  openside() {
    this.issideopened.emit();
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    public translate: TranslateService,

  ) {
    this.translate.addLangs(['en', 'es']),
    this.translate.setDefaultLang('en');
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }


  title = 'multilanguage';

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
