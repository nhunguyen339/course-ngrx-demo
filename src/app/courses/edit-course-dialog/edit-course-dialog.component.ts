import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { CoursesTypes } from "../courses.types";
import { Course } from "../model/course";

@Component({
    selector: 'app-edit-course-dialog',
    styleUrls: ['edit-course-dialog.component.scss'],
    templateUrl: 'edit-course-dialog.component.html'
})
export class EditCourseDialog implements OnInit {
    public courses: Course[] = [];
    public courseForm: FormGroup;

    @Input() public course: Course;
    @Input() public categories: string;
    @Output() public closeDialog = new EventEmitter();

    constructor(public fb: FormBuilder, private store: Store) {}

    ngOnInit() {
        this.courseForm = this.fb.group({
            id: this.course.id,
            description: this.course.description,
            category: this.course.category
        });
    }

    public get getCourseValue() {
        return this.courseForm.getRawValue();
    }

    public submit() {
        const updatedValue = this.courseForm.getRawValue();
        this.store.dispatch(CoursesTypes.updateCourse({course: updatedValue}))
        this.closeDialog.emit();
    }
}
