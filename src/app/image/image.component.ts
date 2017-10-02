import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ServiceQuestion } from '../questions.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

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

}
