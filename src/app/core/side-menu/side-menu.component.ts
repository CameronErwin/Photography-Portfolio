import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  public menuItems: any[];

  constructor(
    private utilityService: UtilityService,
  ) { }

  ngOnInit(): void {
    this.menuItems = this.utilityService.getMenuItems();
  }

}
