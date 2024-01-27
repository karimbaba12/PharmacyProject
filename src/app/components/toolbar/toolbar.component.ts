import { TranslateService } from '@ngx-translate/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Output() issideopened = new EventEmitter<boolean>();
  Lang: any;
  openside() {
    this.issideopened.emit();
  }
  lang:string = '';
  constructor(private authService: AuthService, private router: Router, private translateService:TranslateService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
    this.lang = localStorage.getItem('lang') || 'en';
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  changeLang(lang: any) {
    const selectedLanguage = lang.target.value;
    localStorage.setItem('lang', selectedLanguage);
    this.translateService.use(selectedLanguage);
  }
}
