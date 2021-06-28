import { Label } from './../../interfaces/components/label';
import { Component, OnInit } from '@angular/core';
import { LableType } from '../../interfaces/enums';


@Component({
  selector: 'ocap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerProp: Label = {
    text: "header",
    styleType: LableType.large
  };
  constructor() { }

  ngOnInit(): void {
  }

}
