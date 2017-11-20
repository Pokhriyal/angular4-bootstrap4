import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
