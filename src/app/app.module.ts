import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ScoreComponent } from './score/score.component';
import { ImageComponent } from './image/image.component';
import { QuestionComponent } from './question/question.component';
import { NextQuestionComponent } from './next-question/next-question.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScoreComponent,
    ImageComponent,
    QuestionComponent,
    NextQuestionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
