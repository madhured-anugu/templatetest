/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, OnInit } from '@angular/core';
import { DynamicItem } from '../dynamic-item';

@Component({
  selector: 'app-tool-content',
  templateUrl: './tool-content.component.html',
  styleUrls: ['./tool-content.component.css']
})
export class ToolContentComponent implements OnInit {

  @Input() components: DynamicItem[] = [];

  constructor() {
    console.log('contructor');
   }

  ngOnInit() {
    console.log('ngInit')
  }

}