import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {

  @Input() isMobile: boolean;

  public menuItems: Array<{
    title?: string,
    path?: string,
    divider?: boolean,
  }> = [{
    title: 'Home',
    path: 'home',
  }, {
    title: 'Gallery',
    path: 'gallery',
  }, {
    divider: true,
  }, {
    title: 'About',
    path: 'about',
  }];

  constructor() { }

}
