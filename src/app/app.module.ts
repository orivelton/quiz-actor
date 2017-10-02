import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ServiceQuestion } from './questions.service';
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
    BrowserModule,
    HttpModule
  ],
  providers: [ServiceQuestion],
  bootstrap: [AppComponent]
})
export class AppModule { }
