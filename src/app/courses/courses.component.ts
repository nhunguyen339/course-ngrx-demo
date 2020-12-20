import { Component, OnInit } from "@angular/core";
import { Course } from "./model/course";
import { CoursesService } from "./services/courses.service";

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
    public courses: Course[] = [];
    public selectedCourse: Course;
    public beginnerCourses: ClassifiedCourses;
    public advancedCourses: ClassifiedCourses;
    public initialDone = false;
    public categories = categories;

    constructor(private coursesService: CoursesService) {}

    ngOnInit() {
        this.coursesService.findAllCourses().subscribe(courses => {
            this.courses = courses;
            this.classifyCategory(courses);
            this.initialDone = true;
        });
    }

    public displayEditDialog(selectedCourse) {
        this.selectedCourse = selectedCourse;
    }

    public classifyCategory(courses: Course[]) {
        this.advancedCourses = {
            courses: this.getCoursesWithCatagory(courses, advancedType),
            catagoryName: advancedType
        };

        this.beginnerCourses = {
            courses: this.getCoursesWithCatagory(courses, beginnerType),
            catagoryName: beginnerType
        };
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

        this.classifyCategory(this.courses);
    }
}