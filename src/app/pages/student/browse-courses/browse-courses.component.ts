import { Component } from '@angular/core';
import { StudentSidebarComponent } from '../../../components/student-sidebar/student-sidebar.component';
import { StudentNavComponent } from '../../../components/student-nav/student-nav.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-browse-courses',
  standalone: true,
  imports: [StudentSidebarComponent, StudentNavComponent, RouterLink],
  templateUrl: './browse-courses.component.html',
  styleUrl: './browse-courses.component.css'
})
export class StudentBrowseCoursesComponent {
  courses = [{
    courseCode: 'CSC101',
    courseName: 'Introduction to Computer Science',
    instructorName: 'John Doe'
  },{
    courseCode: 'CSC201',
    courseName: 'Introduction to Computer Science',
    instructorName: 'John Doe'
  },{
    courseCode: 'CSC301',
    courseName: 'Introduction to Computer Science',
    instructorName: 'John Doe'
  },{
    courseCode: 'CSC401',
    courseName: 'Introduction to Computer Science',
    instructorName: 'John Doe'
  },{
    courseCode: 'CSC501',
    courseName: 'Introduction to Computer Science',
    instructorName: 'John Doe'
  },{
    courseCode: 'CSC601',
    courseName: 'Introduction to Computer Science',
    instructorName: 'John Doe'
  },{
    courseCode: 'CSC701',
    courseName: 'Introduction to Computer Science',
    instructorName: 'John Doe'}
  ]

}
