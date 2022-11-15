import {Component, EventEmitter, Input, Output} from '@angular/core';

export type AnswerState = 'none' | 'yes' | 'no';

@Component({
  selector: 'app-question-widget',
  templateUrl: './question-widget.component.html',
  styleUrls: ['./question-widget.component.scss']
})
export class QuestionWidgetComponent {
  @Input()
  question = 'Do you forget something?';

  @Input()
  state: AnswerState = 'none';

  @Output()
  answerEvent = new EventEmitter<AnswerState>();

  get isAnswered() {
    return this.state !== 'none';
  }
}
