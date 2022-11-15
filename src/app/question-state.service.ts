import { Injectable } from '@angular/core';
import {QUESTIONS, QuestionType} from "./questions";
import {AnswerState} from "./question-widget/question-widget.component";

@Injectable({
  providedIn: 'root'
})
export class QuestionStateService {
  private _loadingState: 'started' | 'loading' | 'ready' = 'started';
  private _questions: QuestionType[] = [];
  private answers = new Map<number, AnswerState>();

  get loadingState() {
    return this._loadingState;
  }

  get ready() {
    return this._loadingState === 'ready';
  }

  get loading() {
    return this._loadingState === 'loading';
  }

  get questions() {
    return this._questions;
  }

  get currentScorePercentage() {
    return Math.round(((this.maxWeight + this.answeredWeight) / (this.maxWeight * 2)) * 100);
  }

  private get answeredWeight() {
    let weight = 0;
    this.answers.forEach((answer, id) => {
      if (answer === 'none') return;
      const coef = answer === 'yes' ? 1 : -1;
      weight = weight + this._questions.find(el => el.id === id)!.weight * coef;
    });

    return weight;
  }

  private get maxWeight() {
    return this._questions.reduce((acc, el) => {
      return acc + el.weight;
    }, 0)
  }

  async loadQuestions() {
    this._loadingState = 'loading';
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this._questions = QUESTIONS;
        this._loadingState = 'ready';
        resolve();
      }, 2000);
    });
  }

  getAnswerState(id: number): AnswerState {
    return this.answers.get(id) || 'none';
  }

  setAnswerState(id: number, state: AnswerState) {
    this.answers.set(id, state);
  }

  reset() {
    this.answers.clear();
  }
}
