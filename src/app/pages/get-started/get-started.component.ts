import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IntroCardComponent } from '../../components/intro-card/intro-card.component';
import { FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import {NgFor, NgIf} from '@angular/common'
import { DataService } from '../../service/data.service';


@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [RouterLink, IntroCardComponent, ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.css'
})
export class GetStartedComponent {

   constructor(private route: Router, private uniData: DataService){}  
  
  universitiesAvailable: string[] = ["Redeemers University", "Crawford University"]



    gettingStartedForm = new FormGroup({
      universityName: new FormControl('', [Validators.required, Validators.minLength(10)])
    })


    gettingStartedFormSubmit(){
          this.uniData.setSharedData(this.gettingStartedForm.get('universityName')?.value)
          this.route.navigateByUrl('/signup')
    }
}
