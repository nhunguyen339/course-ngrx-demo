import { createAction, props } from "@ngrx/store";

import { Course } from './model/course';

export const loadCourses = createAction(
    '[Course Resolve] load all course'
);

export const coursesLoaded = createAction(
    '[Courses Effect] all courses loadded',
    props<{courses: Course[]}>()
);

export const coursesUpdated = createAction(
    '[Courses Effect] course updated',
    props<{courses: Course}>()
);
