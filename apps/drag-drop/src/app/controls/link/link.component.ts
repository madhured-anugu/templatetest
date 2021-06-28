import { Link } from './../../interfaces/components/link';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ocap-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  linkProp: Link = {
    href : "",
    text : "Link"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
