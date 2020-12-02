import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  public tuoi=10;

  constructor() {
     //this.tuoi=10
   }
  tangTuoi(){
    this.tuoi=this.tuoi+1;
  }
}
