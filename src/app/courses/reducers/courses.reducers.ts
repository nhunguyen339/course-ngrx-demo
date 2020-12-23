import { createReducer, on } from "@ngrx/store";

import { CoursesTypes } from '../courses.types';

const initialCoursesState = {
    courses: undefined
}

export const coursesReducer = createReducer(
    initialCoursesState,
    on(CoursesTypes.allCoursesLoaded, (state, action) => {
        return {
            courses: action.courses
        }
    }),
    on(CoursesTypes.updateCourse, (state, action) => {
        const updated = [ ...state.courses ]
        const index = state.courses.findIndex(course => action.course.id === course.id);
        const currentCourse = state.courses[index];
        updated[index] = {
            ...currentCourse,
            description: action.course.description,
            category: action.course.category
        };
        return {
            courses: updated
        }
    }),
);
