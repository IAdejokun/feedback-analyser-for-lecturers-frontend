import { Component } from '@angular/core';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { LecturerNavComponent } from '../../../components/lecturer-nav/lecturer-nav.component';

@Component({
  selector: 'app-lecturer-dashboard',
  standalone: true,
  imports: [SidebarComponent, LecturerNavComponent],
  templateUrl: './lecturer-dashboard.component.html',
  styleUrl: './lecturer-dashboard.component.css'
})
export class LecturerDashboardComponent {

}
