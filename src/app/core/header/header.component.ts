import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public showMenu: boolean = false;
  public menuItems: any[];

  constructor(
    private utilityService: UtilityService,
  ) { }

  ngOnInit(): void {
    this.menuItems = this.utilityService.getMenuItems();
  }

  toggleNavbar(): void {
    this.showMenu = !this.showMenu;
  }

  disableNavbar(): void {
    this.showMenu = false;
  }

}
