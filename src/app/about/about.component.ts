import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  ten="long";
  tuoi;



  constructor(private demo:DemoService) { 
    this.tuoi=demo.tuoi;
  }
  public tangTuoi(){
    this.tuoi=this.demo.tuoi++;
    //this.tuoi=this.demo.tuoi;

  };
  public giamTuoi(){
    this.tuoi= this.demo.tuoi--;
    //this.tuoi=this.demo.tuoi;
  };

  ngOnInit(): void {
  }

}
