import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from './reducers/courses.reducers';

export const selectCoursesState = createFeatureSelector<CoursesState>('courses');

export const selectAllCourses = createSelector(
    selectCoursesState,
    state => state.courses
);

export const selectAdvancedCourses = createSelector(
    selectCoursesState,
    state => {
        if (state.courses) {
            return state.courses.filter(course => course.category === 'ADVANCED')
        }
    },
);

export const selectBeginnerCourses = createSelector(
    selectCoursesState,
    state => {
        if (state.courses) {
            return state.courses.filter(course => course.category === 'BEGINNER')
        }
    },
);