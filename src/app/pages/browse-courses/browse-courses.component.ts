import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LecturerNavComponent } from "../../components/lecturer-nav/lecturer-nav.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { StudentSidebarComponent } from "../../components/student-sidebar/student-sidebar.component";
import { StudentNavComponent } from '../../components/student-nav/student-nav.component';

@Component({
  selector: 'app-browse-courses',
  standalone: true,
  imports: [LecturerNavComponent, SidebarComponent, RouterLink, StudentSidebarComponent, StudentNavComponent],
  templateUrl: './browse-courses.component.html',
  styleUrl: './browse-courses.component.css'
})
export class BrowseCoursesComponent {
  role: string | null = 'student';

  
  // constructor(protected route: ActivatedRoute) {
  //   this.role = this.route.snapshot.paramMap.get('role');
  // }

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
