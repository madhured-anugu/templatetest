import { Component } from '@angular/core';

@Component({
  selector: 'ocap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item = {
    type: 'tabs'
  };

  constructor() {}
}
