import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesResolve } from './courses/courses.resolver';


const routes: Routes = [
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
    resolve: [CoursesResolve]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CoursesResolve]
})
export class AppRoutingModule { }
