import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { QuestionWidgetComponent } from './question-widget/question-widget.component';
import { QuestionsPageComponent } from './questions-page/questions-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    QuestionWidgetComponent,
    QuestionsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
