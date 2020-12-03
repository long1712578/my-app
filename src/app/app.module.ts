import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormsModule } from '@angular/forms';
import { ProgressComponent } from './progress-bar/progress.component';
import { from } from 'rxjs';
import { FlexComponent } from './flex/flex.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { FormComponent } from './form/form.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { MatSliderModule } from '@angular/material/slider';
import { StudentComponent } from './student/student.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentUpdateComponent } from './student-update/student-update.component';


=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 98c9f4ccf49aecd57a809aaa88a2de52dc174eac
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ProgressComponent,
    FlexComponent,
    HeaderMenuComponent,
    HomeComponent,
    AboutComponent,
    ErrorComponent,
    FormComponent,
    ReactiveComponent,
    StudentComponent,
    StudentCreateComponent,
    StudentUpdateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule
=======
    BrowserAnimationsModule, ReactiveFormsModule,HttpClientModule,
>>>>>>> 98c9f4ccf49aecd57a809aaa88a2de52dc174eac
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
