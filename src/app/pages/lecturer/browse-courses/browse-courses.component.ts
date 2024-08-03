import { Component } from '@angular/core';
import { LecturerNavComponent } from '../../../components/lecturer-nav/lecturer-nav.component';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-browse-courses',
  standalone: true,
  imports: [LecturerNavComponent, RouterLink, SidebarComponent],
  templateUrl: './browse-courses.component.html',
  styleUrl: './browse-courses.component.css'
})
export class LecturerBrowseCoursesComponent {
  
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
