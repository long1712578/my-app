import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name='';
  password='';
  kinds=["bac si","hoc sinh","giao vien"];

  constructor() { }

  ngOnInit(): void {
  }
  OnSubmit(){
  console.log([this.name,this.password]);
  }

}
