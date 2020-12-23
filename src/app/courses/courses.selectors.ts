import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Course } from "./model/course";

export interface CoursesState {
    courses: Course[]
}

export const selectCoursesState = createFeatureSelector<CoursesState>('courses');

export const selectAllCourses = createSelector(
    selectCoursesState,
    state => state.courses
)

export const selectAdvancedCourses = createSelector(
    selectCoursesState,
    state => {
        if (state.courses) {
            return state.courses.filter(course => course.category === 'ADVANCED');
        }
    }
);

export const selectBeginnerCourses = createSelector(
    selectCoursesState,
    state => {
        if (state.courses) {
            return state.courses.filter(course => course.category === 'BEGINNER');
        }
    }
);
