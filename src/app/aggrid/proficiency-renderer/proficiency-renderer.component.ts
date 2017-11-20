import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-proficiency-renderer',
  templateUrl: './proficiency-renderer.component.html',
  styleUrls: ['./proficiency-renderer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProficiencyRendererComponent implements OnInit {
  
  private params: any;
  private value: any;
  private styles: any;

  // called on init
  agInit(params: any): void {
      this.params = params;
      this.value = this.params.value;

      this.styles = {
          width: this.value + "%",
          backgroundColor: '#00A000'
      };

      if (this.value < 20) {
          this.styles.backgroundColor = 'red';
      } else if (this.params.value < 60) {
          this.styles.backgroundColor = '#ff9900';
      }
  }

  constructor() { }

  ngOnInit() {
  }

}
