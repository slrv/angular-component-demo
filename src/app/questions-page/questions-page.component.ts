import { Component, OnInit } from '@angular/core';
import {QuestionStateService} from "../question-state.service";

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.scss']
})
export class QuestionsPageComponent implements OnInit {
  constructor(public readonly questionService: QuestionStateService) {}

  get questions() {
    return this.questionService.questions.sort((a, b) => a.order - b.order);
  }

  ngOnInit(): void {
    this.questionService.loadQuestions().then();
  }
}
