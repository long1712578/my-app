import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { HttpServiceApiService } from '../http-service-api.service';
import { student } from '../models/student';
import * as _ from 'lodash';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: student[] = []
  idStudent;
  myGroup = new FormGroup({
    keyword: new FormControl(''),
  });


  constructor(private studentService: HttpServiceApiService, private router: Router, private studentU: CommonService) { }

  ngOnInit(): void {
    //this.loadPaging(1, 5);
    this.loadData();
  }

  private loadData() {
    this.studentService.getstudents().subscribe((data) => {
      this.students = data;
    })

  }

  public loadPaging(index, size) {
    this.studentService.loadPaging(index, size).subscribe((data) => {
      this.students = data;
    })
  }

  public addStudent() {
    this.router.navigate(['create-student']);


  }

  public deleteStudent(studentId) {
    this.studentService.deleteStudent(studentId).subscribe((data) => {
      console.log(data);
      this.loadData();
    })
  }

  public editStudent(studentId) {
    this.studentService.getStudentById(studentId).subscribe((data) => {
      this.studentU.studentUpdate = data;
      this.router.navigate(['update-student']);
    })

  }

  public sortByCode(dir) {
    if (dir === 'up') {
      this.students = _.orderBy(this.students, ['code'], ['desc']);
    } else {
      this.students = _.orderBy(this.students, ['code'], ['asc']);
    }
  }
  public searchStudent() {
    console.log("key: ", this.myGroup.controls.keyword.value);
    this.studentService.searchStudent(this.myGroup.controls.keyword.value).subscribe((data) => {
      console.log("data:", data)
      this.students = data;
      //this.loadData();
    })
  }

}
