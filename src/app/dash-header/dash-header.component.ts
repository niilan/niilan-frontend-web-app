import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-header',
  templateUrl: './dash-header.component.html',
  styleUrls: ['./dash-header.component.scss']
})
export class DashHeaderComponent implements OnInit {

  @Input() title = ''

  constructor() { }

  ngOnInit(): void {
  }

}