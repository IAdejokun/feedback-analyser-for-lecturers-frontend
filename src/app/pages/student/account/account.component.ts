import { Component } from '@angular/core';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { StudentSidebarComponent } from '../../../components/student-sidebar/student-sidebar.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [StudentSidebarComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class StudentAccountComponent {

  username = 'John Doe';

  imgSrc = 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80';
}
