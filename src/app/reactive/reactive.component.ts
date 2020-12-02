import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  myForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    tel: new FormControl(''),
  });


  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log("Submit: ", this.myForm.value.name)
  }

}
