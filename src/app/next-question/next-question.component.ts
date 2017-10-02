import { Component, OnInit } from '@angular/core';
import { ServiceQuestion } from '../questions.service';

@Component({
  selector: 'app-next-question',
  templateUrl: './next-question.component.html',
  styleUrls: ['./next-question.component.css']
})
export class NextQuestionComponent implements OnInit {

  public dataQuestions: any;
  public showme: boolean = false;
  
    constructor(private myService: ServiceQuestion) {
    }
  
    ngOnInit() {
      this.dataQuestions = this.myService.getQuestion()
      .subscribe(dataQuestion => {
          this.dataQuestions = dataQuestion;
          console.log(this.dataQuestions);
      });
    }

}
