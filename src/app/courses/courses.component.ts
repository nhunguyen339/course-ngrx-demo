import { Component, OnInit } from "@angular/core";
import { Course } from "./model/course";
import { CoursesService } from "./services/courses.service";

const categories = ['BEGINNER', 'ADVANCED'];
@Component({
    selector: 'app-courses',
    styleUrls: [`courses.component.scss`],
    templateUrl: 'courses.component.html'
})
export class CoursesComponent implements OnInit {
    public courses: Course[] = [];
    public selectedCourse: Course;
    public beginnerCourses: Course[];
    public advancedCourses: Course[];
    public initialDone = false;
    public categories = categories;

    constructor(private coursesService: CoursesService) {}

    ngOnInit() {
        this.coursesService.findAllCourses().subscribe(courses => {
            this.reload(courses);
            this.initialDone = true;
        });
    }

    public displayEditDialog(selectedCourse) {
        this.selectedCourse = selectedCourse;
    }

    public reload(courses) {
        this.courses = courses;

        this.advancedCourses = this.courses.filter(course => course.category === 'ADVANCED');
        this.beginnerCourses = this.courses.filter(course => course.category === 'BEGINNER');
    }

    public getCoursesWithCatagory(courses: Course[], type: string) {
        return courses.filter(course => course.category === type);
    }

    public courseUpdated(updatedCourse: Course) {
        const index = this.courses.findIndex(course => updatedCourse.id === course.id);
        const currentCourse = this.courses[index];
        this.courses[index] = {
            ...currentCourse,
            description: updatedCourse.description,
            category: updatedCourse.category
        };

        this.reload(this.courses);
    }
}