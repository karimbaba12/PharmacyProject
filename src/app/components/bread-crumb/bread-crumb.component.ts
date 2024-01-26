import { Component } from '@angular/core';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss'],
})
export class BreadCrumbComponent {
  crumbs: string[] = ['Home', 'Library', 'Data'];
  addedCrumbs: string[] = ['Home', 'Library', 'Data'];

  addCrumb(newCrumb: string) {
    if (this.addedCrumbs.indexOf(newCrumb) === -1) {
      this.crumbs.push(newCrumb);
      this.addedCrumbs.push(newCrumb);
    }
  }
}
