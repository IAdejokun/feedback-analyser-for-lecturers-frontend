import { Component, OnDestroy, OnInit } from '@angular/core';
import { IntroCardComponent } from '../../components/intro-card/intro-card.component';
import { ReactiveFormsModule, Validators, FormGroup, FormControl } from '@angular/forms';
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IntroCardComponent, ReactiveFormsModule, NgFor, NgIf, RouterLink, RouterLinkActive, RouterOutlet, RouterModule, TitleCasePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy {

  userId !: string;
  
  subscription!: Subscription;

  rolesAvailable: string[] = ["Lecturer", "Student"]


  constructor(private route: Router, private uniData: DataService){

  }

  logInForm = new FormGroup({
    matricOrIdNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
    role: new FormControl('',[Validators.required,Validators.minLength(6)] ),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    university: new FormControl('', [Validators.required])
  })


    ngOnInit(): void {
        this.subscription = this.uniData.getSharedData().subscribe(data => {
          this.logInForm.get('university')?.setValue(data)
        })
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }

  logInSuccessful = false

  loginFormSubmit(){

    this.logInSuccessful = true;

    console.log(this.logInForm.value);
    // this.logInForm.reset();
      setInterval(
        ()=>{
          if (this.logInForm.valid) {
             if (this.logInForm.get('role')?.value != 'Student') {
              this.route.navigateByUrl('/lecturer/dashboard' );
             }else{
              this.route.navigateByUrl('/student/dashboard')
             }
          }
        }, 6000
      )
   
  }
}
