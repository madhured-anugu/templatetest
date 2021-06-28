import { Component, OnInit } from '@angular/core';
import { LableType } from '../../interfaces/enums';
import { Label } from '../../interfaces/components/label';

@Component({
  selector: 'ocap-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {
  labelProp: Label = {
    text: "label",
    styleType: LableType.large
  }
  constructor() { }

  ngOnInit(): void {
  }

}
