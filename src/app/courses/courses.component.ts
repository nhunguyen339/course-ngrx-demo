import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectAdvancedCourses, selectBeginnerCourses } from "./courses.selectors";
import { Course } from "./model/course";

const categories = ['BEGINNER', 'ADVANCED'];
@Component({
    selector: 'app-courses',
    styleUrls: [`courses.component.scss`],
    templateUrl: 'courses.component.html'
})
export class CoursesComponent implements OnInit {
    public courses: Course[] = [];
    public selectedCourse: Course;
    public beginnerCourses$: Observable<Course[]>;
    public advancedCourses$: Observable<Course[]>;
    public initialDone = false;
    public categories = categories;

    constructor(private store: Store) {}

    ngOnInit() {
        this.reload();
    }

    public displayEditDialog(selectedCourse) {
        this.selectedCourse = selectedCourse;
    }

    public reload() {
        this.advancedCourses$ = this.store.select(selectAdvancedCourses);
        this.beginnerCourses$ = this.store.select(selectBeginnerCourses);
    }
}