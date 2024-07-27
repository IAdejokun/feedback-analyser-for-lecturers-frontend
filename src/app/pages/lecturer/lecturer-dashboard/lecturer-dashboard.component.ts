import { Component } from '@angular/core';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { LecturerNavComponent } from '../../../components/lecturer-nav/lecturer-nav.component';
import { LecturerDashboardTotalStudentsComponent } from '../../../components/lecturer-dashboard-total-students/lecturer-dashboard-total-students.component';
import { LecturerDashboardTotalCoursesComponent } from '../../../components/lecturer-dashboard-total-courses/lecturer-dashboard-total-courses.component';
import { LecturerDashboardFeedbacknumberComponent } from '../../../components/lecturer-dashboard-feedbacknumber/lecturer-dashboard-feedbacknumber.component';
import { ChartComponent } from '../../../components/chart/chart.component';
import { RelativeWordsComponent } from '../../../components/relative-words/relative-words.component';

@Component({
  selector: 'app-lecturer-dashboard',
  standalone: true,
  imports: [SidebarComponent, RelativeWordsComponent,ChartComponent, LecturerNavComponent, LecturerDashboardTotalStudentsComponent, LecturerDashboardTotalCoursesComponent, LecturerDashboardFeedbacknumberComponent],
  templateUrl: './lecturer-dashboard.component.html',
  styleUrl: './lecturer-dashboard.component.css'
})
export class LecturerDashboardComponent {
    
}
