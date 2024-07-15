import { Routes } from '@angular/router';
import {SignupComponent} from './pages/signup/signup.component'
import { LoginComponent } from './pages/login/login.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GetHelpComponent } from './pages/get-help/get-help.component';
import { LecturerDashboardComponent } from './pages/lecturer/lecturer-dashboard/lecturer-dashboard.component';
import { StudentDashboardComponent } from './pages/student/student-dashboard/student-dashboard.component';

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
        path:'student/dashboard',
        component:StudentDashboardComponent
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
