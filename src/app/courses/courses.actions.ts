import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";


export const loadCourses = createAction(
    '[Courses Resolver] Load all courses'
);

export const allCoursesLoaded = createAction(
    '[Courses Effects] All courses loaded',
    props<{courses: Course[]}>()
);

export const updateCourse = createAction(
    '[Courses Effects] updated courses',
    props<{course: Course}>()
);
