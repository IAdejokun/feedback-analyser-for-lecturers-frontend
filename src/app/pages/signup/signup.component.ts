import { Component, OnDestroy, OnInit } from '@angular/core';
import { IntroCardComponent } from '../../components/intro-card/intro-card.component';
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import {ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms'
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DataService } from '../../service/data.service';
import { catchError, throwError, Subscription, tap } from 'rxjs';
import {uniqueNamesGenerator, Config, adjectives, colors, animals,starWars} from 'unique-names-generator';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [IntroCardComponent,NgIf, NgFor, ReactiveFormsModule, RouterLink, RouterLinkActive, TitleCasePipe],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit, OnDestroy{

  customConfig: Config = {
    dictionaries: [adjectives, colors, animals, starWars],
    separator:'-',
    length: 2
  }

  randomName : string = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals, starWars]
  }) 

  shortName: string = uniqueNamesGenerator(this.customConfig)
  subscription!: Subscription;

  constructor(private route: Router, private uniData: DataService, private authService: AuthService ){

  }

  rolesAvailable : string[] = ["lecturer", "student"]

  signUpForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    randomUser: new FormControl( {value:this.shortName, disabled: true}),
    matricOrIdNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
    role: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, Validators.minLength(10)]),
    university: new FormControl('', [Validators.required])
  })


  ngOnInit(): void {
      this.subscription = this.uniData.getSharedData().subscribe(data => {
        this.signUpForm.get('university')?.setValue(data)
        console.log(data)
      })
  }


  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }

  signupSuccessful = false

// form submmission

  signUpFormSubmit(){
    
      console.log(this.signUpForm.value)
      this.signupSuccessful = true;

      const userData = {
        full_name: this.signUpForm.get('fullName')?.value,
        id_or_matricn_number: this.signUpForm.get('matricOrIdNumber')?.value,
        user_type: this.signUpForm.get('role')?.value,
        password: this.signUpForm.get('password')?.value,
        university: this.signUpForm.get('university')?.value,
        username: this.signUpForm.get('role')?.value === 'Student' ? this.signUpForm.get('randomUser')?.value : this.signUpForm.get('fullName')?.value
        }
    
      console.log(userData)

      this.authService.register(userData).subscribe(
        (response) => {
          console.log('Registration Successful', response);
          setTimeout(() => {
            this.signUpForm.reset();
            this.route.navigateByUrl('/login');
          }, 60);
        },
        (error) => {
          console.log('Registration Unsuccessful', error);
        }
      );
      
    }

      
  
}
