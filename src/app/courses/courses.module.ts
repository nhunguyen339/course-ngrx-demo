import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CoursesService } from './services/courses.service';
import { CoursesComponent } from './courses.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCourseDialog } from './edit-course-dialog/edit-course-dialog.component';
import { NgSelectModule } from '@ng-select/ng-select';

export const coursesRoutes: Routes = [
  {
    path: '',
    component: CoursesComponent
  },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(coursesRoutes),
    ReactiveFormsModule,
    NgSelectModule
  ],
  declarations: [
    CoursesComponent,
    EditCourseDialog
  ],
  providers: [
    CoursesService,
  ]
})
export class CoursesModule {

  constructor() {
  }
}
