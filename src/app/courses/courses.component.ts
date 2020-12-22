import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Course } from "./model/course";
import { selectAllCourses, selectAdvancedCourses, selectBeginnerCourses } from './courses.selectors';
import { Observable } from "rxjs";
export interface ClassifiedCourses {
    catagoryName: string;
    courses: Course[];
}

const advancedType = 'ADVANCED';
const beginnerType = 'BEGINNER';

const categories = [advancedType, beginnerType];
@Component({
    selector: 'app-courses',
    styleUrls: [`courses.component.scss`],
    templateUrl: 'courses.component.html'
})
export class CoursesComponent implements OnInit {
    public courses$: Observable<Course[]>;

    public selectedCourse: Course;
    public beginnerCourses$: Observable<Course[]>;
    public advancedCourses$: Observable<Course[]>;
    public initialDone = false;
    public categories = categories;

    constructor(private store: Store<{}>) {}

    ngOnInit() {
        this.courses$ = this.store.select(selectAllCourses);
        this.advancedCourses$ = this.store.select(selectAdvancedCourses)
        this.beginnerCourses$ = this.store.select(selectBeginnerCourses)
    }

    public displayEditDialog(selectedCourse) {
        this.selectedCourse = selectedCourse;
    }
}