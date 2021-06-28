import { Component, OnInit } from '@angular/core';
import { Label } from '../../interfaces/components/label';
import { LableType } from '../../interfaces/enums';

@Component({
  selector: 'ocap-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  labelProp: Label = {
    text: "label",
    styleType: LableType.large
  }
  constructor() { }

  ngOnInit(): void {
  }

}
