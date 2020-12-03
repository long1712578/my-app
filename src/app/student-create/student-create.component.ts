import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServiceApiService } from '../http-service-api.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

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
  kinds: any = ['nam', 'nu'];
  constructor(private student: HttpServiceApiService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log("gender:", this.myStudentForm.value);
    this.student.addStudent(this.myStudentForm.value).subscribe(data => {
      console.log("data: ", data);
    })
  }
  changeGender(e) {
    console.log(e.target.value);
    this.myStudentForm.controls.gender.setValue(e.target.value, {
      onlySelf: true
    })
  }

  backHome() {
    this.router.navigate(['students']);
  }

}
