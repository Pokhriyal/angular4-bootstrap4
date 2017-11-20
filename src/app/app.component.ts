import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
title = 'app';
name: string;
menuList: any;
selected: any;

private _opened = true;
private _modeNum = 1;
private _positionNum = 0;
private _dock = false;
private _closeOnClickOutside = false;
private _closeOnClickBackdrop = false;
private _showBackdrop = false;
private _animate = true;
private _trapFocus = true;
private _autoFocus = true;
private _keyClose = false;
private _autoCollapseHeight: number = null;
private _autoCollapseWidth: number = null;
private _MODES: Array<string> = ['over', 'push', 'slide'];
private _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

  private _toggleOpened(): void {
    this._opened = !this._opened;
  }

  private _toggleMode(): void {
    this._modeNum++;

    if (this._modeNum === this._MODES.length) {
      this._modeNum = 0;
    }
  }

  private _toggleAutoCollapseHeight(): void {
    this._autoCollapseHeight = this._autoCollapseHeight ? null : 500;
  }

  private _toggleAutoCollapseWidth(): void {
    this._autoCollapseWidth = this._autoCollapseWidth ? null : 500;
  }

  private _togglePosition(): void {
    this._positionNum++;

    if (this._positionNum === this._POSITIONS.length) {
      this._positionNum = 0;
    }
  }

  private _toggleDock(): void {
    this._dock = !this._dock;
  }

  private _toggleCloseOnClickOutside(): void {
    this._closeOnClickOutside = !this._closeOnClickOutside;
  }

  private _toggleCloseOnClickBackdrop(): void {
    this._closeOnClickBackdrop = !this._closeOnClickBackdrop;
  }

  private _toggleShowBackdrop(): void {
    this._showBackdrop = !this._showBackdrop;
  }

  private _toggleAnimate(): void {
    this._animate = !this._animate;
  }

  private _toggleTrapFocus(): void {
    this._trapFocus = !this._trapFocus;
  }

  private _toggleAutoFocus(): void {
    this._autoFocus = !this._autoFocus;
  }

  private _toggleKeyClose(): void {
    this._keyClose = !this._keyClose;
  }

  private _onOpenStart(): void {
    //console.info('Sidebar opening');
  }

  private _onOpened(): void {
   //console.info('Sidebar opened');
  }

  private _onCloseStart(): void {
   //console.info('Sidebar closing');
  }

  private _onClosed(): void {
   //console.info('Sidebar closed');
  }
  constructor() {
  this.title = 'Collapsible menu - Angular 2';
  this.menuList = [{
      name: 'Home',
      icon: 'zmdi zmdi-case',
      href: '/',
      count: 6
      }, {
      name: 'Component',
      icon: 'zmdi zmdi-store',
      href: '/component',
      children: [{
        name: 'Login',
        icon: 'zmdi zmdi-store',
        href: '/login'
        }, {
        name: 'Chart',
        icon: 'zmdi zmdi-store',
        href: '/chart'
      }]
      }, {
      name: 'Dashboard',
      icon: 'zmdi zmdi-case',
      href: '/dashboard',
      count: 6
    }, {
      name: 'Grid',
      icon: 'zmdi zmdi-case',
      href: '/grid'
    }, {
      name: 'Table',
      icon: 'zmdi zmdi-case',
      href: '/table'
    }, {
      name: 'Rich Grid',
      icon: 'zmdi zmdi-case',
      href: '/richgrid'
    }];
  }
  select(item) {
      this.selected = (this.selected === item ? null : item);
  }
  isActive(item) {
    return this.selected === item;
  }

}
