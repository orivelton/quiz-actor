import { Component, OnInit } from '@angular/core';
import { ServiceQuestion } from '../questions.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public dataQuestions: any;
  
    constructor(private myService: ServiceQuestion) {
    }
  
    ngOnInit() {
      this.dataQuestions = this.myService.getQuestion()
      .subscribe(dataQuestion => {
          this.dataQuestions = dataQuestion;
          console.log(this.dataQuestions);
      });
    }

  whatIsTheNameText: string = 'what is the name of this actor?';
  answerText: String = 'Answer';
  
  //Get value textarea
  public getResposta(answer: string) {
    if (this.dataQuestions.title == answer){
      alert('Acertou!');
    } else {
      alert('Errou!!!');
    }
  }

}
