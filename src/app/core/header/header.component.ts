import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public showMenu: boolean = false;
  public menuItems: any[] = [{
    title: 'Gallery',
    path: 'gallery',
  }];

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar(): void {
    this.showMenu = !this.showMenu;
  }

  disableNavbar(): void {
    this.showMenu = false;
  }

}
