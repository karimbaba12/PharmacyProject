import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  //   param = { value: 'world' };

  //   constructor(translate: TranslateService) {
  //     // this language will be used as a fallback when a translation isn't found in the current language
  //     translate.setDefaultLang('en');

  //     // the lang to use, if the lang isn't available, it will use the current loader to get them
  //     translate.use('en');
  //   }
  //   languages = [
  //     { id: 'en', name: 'English' },
  //     { id: 'es', name: 'Spanish' },
  //   ];
  //   selectedLanguage = 'en';

  //   constructor(private translate: TranslateService) {}

  //   changeLanguage(language: string) {
  //     this.translate.use(language);
  //   }

//   title = 'multilanguage';
//   constructor(public translate :TranslateService){
// translate.addLangs(['en','fr']),
// translate.setDefaultLang('en')
//   }

//   switchLanguage(lang:string){
//     this.translate.use(lang)
//   }
}
