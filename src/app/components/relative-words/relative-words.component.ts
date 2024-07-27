import { PercentPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-relative-words',
  standalone: true,
  imports: [PercentPipe],
  templateUrl: './relative-words.component.html',
  styleUrl: './relative-words.component.css'
})
export class RelativeWordsComponent {
    wordOne = 'Good';
    wordTwo = 'Bad';
    wordThree = 'Nice';
    wordFour = 'Too Fast';
    wordFive = 'Too Slow';
    countOne = 4321;
    countTwo = 1234;
    countThree = 2345;
    countFour = 3456;
    countFive = 4567;
    accuracyOne = 80;
    accuracyTwo = 60;
    accuracyThree = 40;
    accuracyFour = 20;
    accuracyFive = 10;
}
