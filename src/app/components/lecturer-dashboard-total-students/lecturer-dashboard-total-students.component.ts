import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lecturer-dashboard-total-students',
  standalone: true,
  imports: [DecimalPipe ],
  templateUrl: './lecturer-dashboard-total-students.component.html',
  styleUrl: './lecturer-dashboard-total-students.component.css'
})
export class LecturerDashboardTotalStudentsComponent {
  studentNumber = 2405
}
