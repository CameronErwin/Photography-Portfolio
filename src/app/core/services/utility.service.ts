import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {

  getMenuItems(): any[] {
    return [{
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
  }

}
