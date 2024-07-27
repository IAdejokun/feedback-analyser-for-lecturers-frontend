import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-student-sidebar',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './student-sidebar.component.html',
  styleUrl: './student-sidebar.component.css'
})
export class StudentSidebarComponent {
  username !: string;
  notificationAvailable = false;
  userImg = 'assets/images/default-profile.png';
  userName = 'John Doe';
  idNumber = '1234567890';
}
