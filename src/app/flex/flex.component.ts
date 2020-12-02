import { style } from '@angular/animations';
import { Component, HostBinding, Input, OnInit } from '@angular/core';

type FlexDirection='row'|'column'|'row-reverse'|'column-reverse';
@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent implements OnInit {
  @Input() flexDirection: FlexDirection='row';

  @HostBinding('style.display') get display(){
    return 'flex';
  }

  @HostBinding('style.flex-direction') get direction(){
    return this.flexDirection;
  }

  constructor() { }
  

  ngOnInit(): void {
  }

}
