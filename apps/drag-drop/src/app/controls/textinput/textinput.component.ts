import { TextInput } from './../../interfaces/components/textinput';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ocap-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.css']
})
export class TextinputComponent implements OnInit {
  @Input() textInputProp: TextInput | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
