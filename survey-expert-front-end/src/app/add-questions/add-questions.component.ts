import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {

  //Qid: any;
  question ={ 
    quiz: {},
    content :'',
    option1 :'',
    option2 :'',
    option3 :'',
    option4 :'',
  }
  constructor() { 

  }

  ngOnInit(): void {
  }

}
