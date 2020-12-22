import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

import { CourseTypes } from './courses.types';
import { CoursesService } from './services/courses.service';

@Injectable({providedIn: 'root'})
export class CoursesEffects {
    loadCourses$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CourseTypes.loadCourses),
            mergeMap(() => {
                return this.coursesService.findAllCourses();
            }),
            map(courses => {
                return CourseTypes.coursesLoaded({courses});
            })
        )
    });

    updateCourses$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CourseTypes.coursesUpdated),
            mergeMap(action => {
                console.log(action)
                return this.coursesService.saveCourse(action.courses.id, action.courses);
            })
        )
    }, { dispatch: false })

    constructor(private actions$: Actions, private coursesService: CoursesService) {}
}