import { Routes } from '@angular/router';
import {SignupComponent} from './pages/signup/signup.component'
import { LoginComponent } from './pages/login/login.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GetHelpComponent } from './pages/get-help/get-help.component';
import { LecturerDashboardComponent } from './pages/lecturer/lecturer-dashboard/lecturer-dashboard.component';
import { StudentDashboardComponent } from './pages/student/student-dashboard/student-dashboard.component';
import { StudentAccountComponent } from './pages/student/account/account.component';
import { LecturerAccountComponent } from './pages/lecturer/account/account.component';
import { LecturerBrowseCoursesComponent } from './pages/lecturer/browse-courses/browse-courses.component';
import { StudentBrowseCoursesComponent } from './pages/student/browse-courses/browse-courses.component';
import { authGuard } from './guard/auth.guard';
import { roleRedirectGuard } from './guard/role-redirect.guard';

export const routes: Routes = [
    {
        path:'',
        component:GetStartedComponent,
        canActivate:[roleRedirectGuard]
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
        component:LecturerDashboardComponent,
        canActivate:[authGuard],
        data:{role:'lecturer'}
    },
    {
        path:'lecturer/account',
        component:LecturerAccountComponent,
        canActivate:[authGuard],
        data:{role:'lecturer'}
    },
    {
        path:'lecturer/browseCourses',
        component:LecturerBrowseCoursesComponent,
        canActivate:[authGuard],
        data:{role:'lecturer'}
    },
    {
        path:'student/browseCourses',
        component:StudentBrowseCoursesComponent,
        canActivate:[authGuard],
        data:{role:'student'}
    },
    {
        path:'student/account',
        component:StudentAccountComponent,
        canActivate:[authGuard],
        data:{role:'student'}
    },
    {
        path:'student/dashboard',
        component:StudentDashboardComponent,
        canActivate:[authGuard],
        data:{role:'student'}
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
        path:'lecturer/account',
        redirectTo:'lecturer/account',
        pathMatch:'full'
    },
    {
        path:'lecturer',
        redirectTo:'lecturer/dashboard',
        pathMatch:'full'
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
        path:'**',
        component:NotFoundComponent
    }
];
