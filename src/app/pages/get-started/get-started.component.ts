import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IntroCardComponent } from '../../components/intro-card/intro-card.component';
import { FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import {NgFor, NgIf} from '@angular/common'
import { DataService } from '../../service/data.service';
import { AuthService } from '../../service/auth.service';



@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [RouterLink, IntroCardComponent, ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.css'
})
export class GetStartedComponent{

  constructor(private route: Router, private uniData: DataService, private authService : AuthService){}  
  
  universitiesAvailable : any[] = []


  
  ngOnInit(): void {
    this.getUniversities()
  }
    // to get the list of universities
  

  getUniversities(){
    this.authService.getUniversities().subscribe(
      (response) => {
        this.universitiesAvailable  = response
      }, (error) => {
        console.log(error)
      })
  }


    
    
    gettingStartedForm = new FormGroup({
      university: new FormControl('', [Validators.required, Validators.minLength(1)])
    })


    gettingStartedFormSubmit(){
          this.uniData.setSharedData(this.gettingStartedForm.get('university')?.value)
          this.route.navigateByUrl('/signup')
    }
}
