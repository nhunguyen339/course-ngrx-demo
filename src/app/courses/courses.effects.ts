import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map } from 'rxjs/operators';

import { CoursesTypes } from "./courses.types";
import { CoursesService } from "./services/courses.service";

@Injectable()
export class CoursesEffects {
    loadCourses$ = createEffect(
        () => this.actions$.pipe(
            ofType(CoursesTypes.loadCourses),
            mergeMap(action => this.coursesService.findAllCourses()),
            map(courses => CoursesTypes.allCoursesLoaded({courses: courses}))
        ),
    );

    updateCourses = createEffect(
        () => this.actions$.pipe(
            ofType(CoursesTypes.updateCourse),
            mergeMap(action => this.coursesService.saveCourse(action.course.id, action.course))
        ),
        {
            dispatch: false
        }
    )

    constructor(private actions$: Actions, private coursesService: CoursesService) {}
}