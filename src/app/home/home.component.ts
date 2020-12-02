import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // providers:  [ DemoService ]
})
export class HomeComponent implements OnInit {
  ten="long";
  tuoi;

  constructor(private demo:DemoService) {
    this.tuoi=demo.tuoi;
   }
 

  ngOnInit(): void {
  }
  public tangTuoi(){
    this.demo.tuoi++;
    this.tuoi=this.demo.tuoi;


  };
  // public giamTuoi(){
  //  this.comman.tuoi--;
  //  this.tuoi=this.comman.tuoi;
  // };

}
