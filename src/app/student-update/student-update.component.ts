import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  kinds = ["nam", "nu"];
  myStudentForm = new FormGroup({
    id: new FormControl(''),
    code: new FormControl(''),
    gender: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dob: new FormControl(''),
    mail: new FormControl(''),
    phone: new FormControl(''),
    picture: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }
  backHome() {

  }
  changeGender() {

  }
  onSubmit() {

  }
}
