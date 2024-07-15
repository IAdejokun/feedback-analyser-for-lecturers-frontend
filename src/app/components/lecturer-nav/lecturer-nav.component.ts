import { Component } from '@angular/core';

@Component({
  selector: 'app-lecturer-nav',
  standalone: true,
  imports: [],
  templateUrl: './lecturer-nav.component.html',
  styleUrl: './lecturer-nav.component.css'
})
export class LecturerNavComponent {

  notificationAvailable = false;

  userImg = 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'

  userName = 'Mark Wanner'

  idNumber = 'PG/23/14/001';
}
