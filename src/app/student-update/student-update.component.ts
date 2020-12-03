import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { HttpServiceApiService } from '../http-service-api.service';
import { student } from '../models/student';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  kinds = ["nam", "nu"];
  student:student;
  idstudent;
  
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
  constructor(private studentNew: CommonService,private router:Router,private studentAfter:HttpServiceApiService) { 
    
  }

  ngOnInit(): void {
    //console.log("updatenew",this.studentNew.studentUpdate);
    this.student=this.studentNew.studentUpdate;
    for(const controlName in this.myStudentForm.controls){
      if(controlName){
        this.myStudentForm.controls[controlName].setValue(this.student[controlName]);
      }
    }
  }
  backHome() {
    console.log(this.myStudentForm.value);
    this.studentAfter.updataStudent(this.myStudentForm.value,this.myStudentForm.controls.id.value).subscribe((data)=>{});
    this.router.navigate(['students'])
  }
  changeGender(e) {
    console.log(e.target.value);
    
  }
  onSubmit() {
    //this.idstudent=this.myStudentForm.controls.id.value;
    console.log("hello 123");
    //this.studentAfter.updataStudent(this.myStudentForm.value,1)
  }
}
