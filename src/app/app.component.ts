import { Component, OnInit } from '@angular/core';
import { ServiceQuestion } from './questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'app';

  public dataQuestions: any;

  constructor(private myService: ServiceQuestion) {
  }
  
  ngOnInit() {
    //this.dataQuestions = this.myService.dataQuestion;
    this.dataQuestions = this.myService.getQuestion()
    .subscribe(dataQuestion => {
        this.dataQuestions = dataQuestion;
        console.log(this.dataQuestions);
    });
  }
}



