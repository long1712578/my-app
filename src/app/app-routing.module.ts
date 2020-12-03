import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [{ path: "", component: HomeComponent },
{ path: "home", component: HomeComponent },
{ path: "about", component: AboutComponent },
{ path: "form", component: FormComponent },
{ path: "create-student", component: StudentCreateComponent },
{ path: "update-student", component: StudentUpdateComponent },
{ path: "reactive", component: ReactiveComponent },
{ path: "students", component: StudentComponent },
{ path: "**", component: ErrorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
