import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CoursesService } from './services/courses.service';
import { CoursesComponent } from './courses.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCourseDialog } from './edit-course-dialog/edit-course-dialog.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { StoreModule } from '@ngrx/store';

import { coursesReducer } from './reducers/courses.reducers';
import { CoursesResolver } from './courses.resolver';
import { EffectsFeatureModule, EffectsModule } from '@ngrx/effects';
import { CoursesEffects } from './courses.effects';

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
    NgSelectModule,
    StoreModule.forFeature('courses', coursesReducer),
    EffectsModule.forFeature([CoursesEffects]),
  ],
  declarations: [
    CoursesComponent,
    EditCourseDialog
  ],
  providers: [
    CoursesService,
    CoursesResolver
  ]
})
export class CoursesModule {

  constructor() {
  }
}
