import { Component } from '@angular/core';
import { StudentSidebarComponent } from '../../../components/student-sidebar/student-sidebar.component';
import { StudentNavComponent } from '../../../components/student-nav/student-nav.component';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [StudentSidebarComponent, StudentNavComponent],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent {


  user = {
    userName: 'Mark Wanner',
    idNumber: 'PG/23/14/001'
  }

}
