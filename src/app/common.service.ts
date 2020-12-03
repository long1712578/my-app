import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public tuoi=20;
  public ten="pham dinh long"
  public studentUpdate:any;

  constructor() { 
    
  }
  public tangTuoi(){
    this.tuoi++;
  }
  public giamTuoi(){
    this.tuoi--;
  }
}
