import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { HttpGetServicesService } from '../http-get-services.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  ten;
  tuoi;



  constructor(private demo:DemoService,private profile:HttpGetServicesService) { 
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
    this.profile.getProfile().subscribe(data=>{
      this.ten=data.name;
    })
  }

}
