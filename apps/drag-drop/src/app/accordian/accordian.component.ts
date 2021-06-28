import { DropdownComponent } from './../controls/dropdown/dropdown.component';
import { LinkComponent } from './../controls/link/link.component';
import { ButtonComponent } from './../controls/button/button.component';
import { LabelComponent } from './../controls/label/label.component';
import { HeaderComponent } from './../controls/header/header.component';
import { TextinputComponent } from './../controls/textinput/textinput.component';
/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { DynamicItem } from '../dynamic-item';
import { StackedComponent } from '../stacked/stacked.component';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {

  components: DynamicItem[] = [];
  controls: DynamicItem[] = [];
  constructor() {
    console.log('AccordianComponent Initializer');
   }

  ngOnInit() {
    this.components = [
      {component: TabComponent, data: {'type': 'tabs', used: 2}},
      {component: StackedComponent, data: {'type': 'stacked', used: 4}},

    ]

    this.controls = [
      {component: TextinputComponent, data: {'type': 'textinput', used: 2}},
      {component: HeaderComponent, data: {'type': 'header', used: 2}},
      {component: ButtonComponent, data: {'type': 'button', used: 2}},
      {component: LinkComponent, data: {'type': 'Link', used: 2}},
      {component: DropdownComponent, data: {'type': 'Dropdown', used: 2}},
      {component: LabelComponent, data: {'type': 'label', used: 2}}
    ]
  }

}
