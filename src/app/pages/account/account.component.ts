import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { LecturerNavComponent } from '../../components/lecturer-nav/lecturer-nav.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [SidebarComponent, LecturerNavComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

  role = 'lecturer';
  username:string | null;

  imgSrc = 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80';
  constructor(protected route: ActivatedRoute) {
    this.username = this.route.snapshot.paramMap.get('username');
  }
  

}
