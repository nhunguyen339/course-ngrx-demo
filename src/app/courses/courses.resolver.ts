import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Store } from "@ngrx/store";
import { tap, first } from 'rxjs/operators';

import { CourseTypes } from './courses.types';

@Injectable()
export class CoursesResolver implements Resolve<any> {

    constructor(private store: Store) {}

    resolve(route, state) {
        return this.store.pipe(
            tap(() => {
                this.store.dispatch(CourseTypes.loadCourses())
                console.log('dispatch')
            }),
            first()
        )
    }
}