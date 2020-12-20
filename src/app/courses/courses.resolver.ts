// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
// import { select, Store } from '@ngrx/store';
// import { finalize, tap, first } from 'rxjs/operators';
// import { CoursesActions } from './courses.types';

// import { areCoursesLoaded } from './courses.seletors';
// @Injectable()
// export class CoursesResolver implements Resolve<any> {
//     loading = false;
//     constructor(private store: Store<any>) {}

//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         return this.store.pipe(
//             select(areCoursesLoaded),
//             tap((areCoursesLoaded) => {
//                 if (!this.loading && !areCoursesLoaded) {
//                     this.loading = true;
//                     this.store.dispatch(CoursesActions.loadAllCourses());
//                 }
//             }),
//             first(),
//             finalize(() => this.loading = false)
//         );
//     }
// }
