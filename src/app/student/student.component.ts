import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceApiService } from '../http-service-api.service';
import { student } from '../models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: student[] = []
  idStudent;

  constructor(private studentService: HttpServiceApiService, private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.studentService.getstudents().subscribe((data) => {
      console.log(data);
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
    this.router.navigate(['update-student']);
    this.idStudent = studentId;
  }

  public sortByCode(dir) {

  }

}
