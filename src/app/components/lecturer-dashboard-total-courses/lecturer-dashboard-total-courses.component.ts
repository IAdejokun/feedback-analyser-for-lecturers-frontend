import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lecturer-dashboard-total-courses',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './lecturer-dashboard-total-courses.component.html',
  styleUrl: './lecturer-dashboard-total-courses.component.css'
})
export class LecturerDashboardTotalCoursesComponent {
  courseNumber = 2;

}
