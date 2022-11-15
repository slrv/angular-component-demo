import { Component, OnInit } from '@angular/core';
import {AnswerState} from "../question-widget/question-widget.component";

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.scss']
})
export class QuestionsPageComponent implements OnInit {

  state: AnswerState = 'none';

  setState(state: AnswerState) {
    this.state = state;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
