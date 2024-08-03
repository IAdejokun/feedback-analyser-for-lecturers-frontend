import { Component, OnDestroy, OnInit } from '@angular/core';
import { IntroCardComponent } from '../../components/intro-card/intro-card.component';
import { ReactiveFormsModule, Validators, FormGroup, FormControl } from '@angular/forms';
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../../service/data.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IntroCardComponent, ReactiveFormsModule, NgFor, NgIf, RouterLink, RouterLinkActive, RouterOutlet, RouterModule, TitleCasePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userId !: string;
  
  subscription!: Subscription;

  rolesAvailable: string[] = ["lecturer", "student"]


  constructor(private route: Router, private authService: AuthService){

  }

  logInForm = new FormGroup({
    matricOrIdNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
    role: new FormControl('',[Validators.required,Validators.minLength(6)] ),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })



    

  logInSuccessful = false

  loginFormSubmit(){

    this.logInSuccessful = true;

    const userData = {
      id_or_matricn_number: this.logInForm.get('matricOrIdNumber')?.value,
      user_type: this.logInForm.get('role')?.value,
      password: this.logInForm.get('password')?.value,
      }

      console.log(userData)

      this.authService.login(userData).subscribe(
        (response) => {
          console.log('Login Successful', response);
          setTimeout(() => {
            this.logInForm.reset();
            if (this.logInForm.get('role')?.value != 'Student') {
              this.route.navigateByUrl('/lecturer/dashboard' );
             }else{
              this.route.navigateByUrl('/student/dashboard')
             }
          }, 6000);
        },
        (error) => {
          console.log('Login Unsuccessful', error);
        }
      );
    }

      
      
   
      
   
  }

