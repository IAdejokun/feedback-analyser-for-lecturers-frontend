import { Component, OnDestroy, OnInit } from '@angular/core';
import { IntroCardComponent } from '../../components/intro-card/intro-card.component';
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import {ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms'
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DataService } from '../../service/data.service';
import { Subscription } from 'rxjs';
import {uniqueNamesGenerator, Config, adjectives, colors, animals,starWars} from 'unique-names-generator';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [IntroCardComponent, NgIf, NgFor, ReactiveFormsModule, RouterLink, RouterLinkActive, TitleCasePipe],
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

  constructor(private route: Router, private uniData: DataService ){

  }

  rolesAvailable : string[] = ["Lecturer", "Student"]

  signUpForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    randomUser: new FormControl('', [Validators.required]),
    matricOrIdNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
    role: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, Validators.minLength(10)]),
    university: new FormControl('', [Validators.required])
  
  })


  ngOnInit(): void {
      this.subscription = this.uniData.getSharedData().subscribe(data => {
        this.signUpForm.get('university')?.setValue(data)
      })
  }


  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }

  signupSuccessful = false

// form submmission

  signUpFormSubmit(){
      
      this.signupSuccessful = true;

      console.log(this.signUpForm.value);
      
      setInterval(
        ()=>{
          this.signUpForm.reset()
          this.route.navigateByUrl('/login')
        }, 6000
      )
      
    }

      
  
}
