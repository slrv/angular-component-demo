import { Component } from '@angular/core';
import {AnswerState} from "./question-widget/question-widget.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  state: AnswerState = 'none';

  setState(state: AnswerState) {
    this.state = state;
  }
}
