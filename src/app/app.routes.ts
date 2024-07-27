import { Routes } from '@angular/router';
import {SignupComponent} from './pages/signup/signup.component'
import { LoginComponent } from './pages/login/login.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GetHelpComponent } from './pages/get-help/get-help.component';
import { LecturerDashboardComponent } from './pages/lecturer/lecturer-dashboard/lecturer-dashboard.component';
import { StudentDashboardComponent } from './pages/student/student-dashboard/student-dashboard.component';
import { BrowseCoursesComponent } from './pages/browse-courses/browse-courses.component';
import { AccountComponent } from './pages/account/account.component';

export const routes: Routes = [
    {
        path:'',
        component:GetStartedComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'lecturer/dashboard',
        component:LecturerDashboardComponent
    },
    {
        path:'lecturer/account',
        redirectTo:'lecturer/account/:username',
        pathMatch:'full'
    },
    {
        path:'lecturer',
        redirectTo:'lecturer/dashboard',
        pathMatch:'full'
    },
    {
        path:'lecturer/browseCourses',
        component:BrowseCoursesComponent
    },
    {
        path:'lecturer/account/:username',
        component:AccountComponent
    },
    {
        path:'lecturer/lecturer/dashboard',
        redirectTo:'lecturer/dashboard',
        pathMatch:'full'
    },
    {
        path:'lecturer/lecturer/browseCourses',
        redirectTo:'lecturer/browseCourses',
        pathMatch:'full'
    },
    {
        path:'student/browseCourses',
        component:BrowseCoursesComponent
    },
    {
        path:'student/account/:username',
        component:AccountComponent
    },
    {
        path:'student/dashboard',
        component:StudentDashboardComponent
    },
    {
        path:'student',
        redirectTo:'student/dashboard',
        pathMatch:'full'
    },
    {
        path:'get-help',
        component:GetHelpComponent
    },
    {
        path:'**',
        component:NotFoundComponent
    }
];
