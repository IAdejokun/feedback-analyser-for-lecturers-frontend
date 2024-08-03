import { Component } from '@angular/core';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { LecturerNavComponent } from '../../../components/lecturer-nav/lecturer-nav.component';
import { LecturerDashboardTotalStudentsComponent } from '../../../components/lecturer-dashboard-total-students/lecturer-dashboard-total-students.component';
import { LecturerDashboardTotalCoursesComponent } from '../../../components/lecturer-dashboard-total-courses/lecturer-dashboard-total-courses.component';
import { LecturerDashboardFeedbacknumberComponent } from '../../../components/lecturer-dashboard-feedbacknumber/lecturer-dashboard-feedbacknumber.component';
import { ChartComponent } from '../../../components/chart/chart.component';
import { RelativeWordsComponent } from '../../../components/relative-words/relative-words.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lecturer-dashboard',
  standalone: true,
  imports: [SidebarComponent, RelativeWordsComponent,ChartComponent, LecturerNavComponent, LecturerDashboardTotalStudentsComponent, LecturerDashboardTotalCoursesComponent, LecturerDashboardFeedbacknumberComponent, RouterLink],
  templateUrl: './lecturer-dashboard.component.html',
  styleUrl: './lecturer-dashboard.component.css'
})
export class LecturerDashboardComponent {

  getView = 'Overview'
  
  receiveView($event: any){
    console.log($event);
    this.getView = $event
  }


  courses = [{
    courseCode: 'CSC101',
    courseName: 'Introduction to Computer Science',
    instructorName: 'John Doe',
    owner: 'John Doe'
  },{
    courseCode: 'CSC201',
    courseName: 'Introduction to Computer Science',
    instructorName: 'John Doe',
    owner: 'John Doe'
  },{
    courseCode: 'CSC301',
    courseName: 'Introduction to Computer Science',
    instructorName: 'John Doe',
    owner: 'John Doe'
  },{
    courseCode: 'CSC401',
    courseName: 'Introduction to Computer Science',
    instructorName: 'John Doe',
    owner: 'John Doe'
  },{
    courseCode: 'CSC501',
    courseName: 'Introduction to Computer Science',
    instructorName: 'John Doe',
    owner: 'John Doe'
  },{
    courseCode: 'CSC601',
    courseName: 'Introduction to Computer Science',
    instructorName: 'John Doe',
    owner: 'John Doe'
  },{
    courseCode: 'CSC701',
    courseName: 'Introduction to Computer Science',
    instructorName: 'John Doe',
    owner: 'John Doe'
  }
  ]

}
