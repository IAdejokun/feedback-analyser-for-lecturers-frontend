import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lecturer-dashboard-feedbacknumber',
  standalone: true,
  imports: [ DecimalPipe ],
  templateUrl: './lecturer-dashboard-feedbacknumber.component.html',
  styleUrl: './lecturer-dashboard-feedbacknumber.component.css'
})
export class LecturerDashboardFeedbacknumberComponent {

  numberOfFeedback = 10353;

}
