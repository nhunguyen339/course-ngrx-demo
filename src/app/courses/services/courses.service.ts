

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../model/course";
import {map} from "rxjs/operators";


@Injectable()
export class CoursesService {

    constructor(private http:HttpClient) {

    }

    findAllCourses(): Observable<Course[]> {
        return this.http.get('/api/courses')
            .pipe(
                map(res => res['payload'])
            );
    }

    findCourseByUrl(courseUrl: string): Observable<Course> {
      return this.http.get<Course>(`/api/courses/${courseUrl}`);
    }

    saveCourse(courseId: number | string, changes: Partial<Course>) {
        return this.http.put('/api/course/' + courseId, changes);
    }
}
