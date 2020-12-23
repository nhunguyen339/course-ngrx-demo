import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { first, tap } from "rxjs/operators";

import { CoursesTypes } from "./courses.types";

@Injectable()
export class CoursesResolve implements Resolve<any> {
    resolve (state, route) {
        return this.store.pipe(
            tap(() => {
                this.store.dispatch(CoursesTypes.loadCourses())
            }),
            first()
        )
    }

    constructor(private store: Store) {}
}