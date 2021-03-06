import { Component, OnInit } from '@angular/core';
// import { ROUTES } from './navbar-routes.config';
import { MenuType } from './navbar.metadata';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.css' ]
})
export class NavbarComponent implements OnInit {
  public menuItems: any[];
  public brandMenu: any;
  public isCollapsed: boolean;

  constructor() {}

  ngOnInit() {
    // this.menuItems = ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
    // this.brandMenu = ROUTES.filter(menuItem => menuItem.menuType === MenuType.BRAND)[0];
    // this.isCollapsed = true;
  }
  public get menuIcon(): string {
    return this.isCollapsed ? '☰' : '✖';
  }

  public getMenuItemClasses(menuItem: any) {
    return {
      'pull-xs-right': this.isCollapsed && menuItem.menuType === MenuType.RIGHT
    };
  }
}
