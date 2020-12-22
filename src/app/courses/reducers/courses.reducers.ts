import { createReducer, on } from '@ngrx/store';

import { CourseTypes } from '../courses.types';
import { Course } from '../model/course';

export interface CoursesState {
    courses: Course[]
}
const initialCoursesState = { courses: undefined };

export const coursesReducer = createReducer(
    initialCoursesState,
    on(CourseTypes.coursesLoaded, (state, action) => {
        return {
            courses: action.courses
        };
    }),
    on(CourseTypes.coursesUpdated, (state, action) => {
        const updateCourses = [...state.courses];
        const index = updateCourses.findIndex(course => action.courses.id === course.id);
        const currentCourse = updateCourses[index];
        updateCourses[index] = {
            ...currentCourse,
            description: action.courses.description,
            category: action.courses.category
        };

        console.log(updateCourses[index])
        return {
            courses: updateCourses
        }
    })
);
