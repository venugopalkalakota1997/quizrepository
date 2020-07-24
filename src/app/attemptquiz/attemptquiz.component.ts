import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AnthenticationService } from '../services/anthentication.service';

@Component({
  selector: 'app-attemptquiz',
  templateUrl: './attemptquiz.component.html',
  styleUrls: ['./attemptquiz.component.css']
})
export class AttemptquizComponent implements OnInit {
  questionlist: any;

  constructor(private route:Router,private quiz:QuizService,private formBuilder: FormBuilder) { }
  quizid:any;
  options: any = [];
  totalAnswered: number = 0;
  rightAnswer: number;
  completed:boolean=false;
  timeLeft: number = 1200;
  interval;

  
  
  ngOnInit() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 1200;
      }
    },1000)
    this.quizid=this.quiz.getQuizCard()
    this.quiz.getallQuestions(this.quizid).subscribe((response) => {
      //alert(JSON.stringify(response))
      this.questionlist=response;
    },(error: HttpErrorResponse) => {
      if (error instanceof Error) {
      } else {
      }
    }
    );
  }

  submitTest() {
		this.rightAnswer = 0;
    this.totalAnswered = 0;
    
		for (let i = 0; i < this.questionlist.length; i++) {
			if ("selected" in this.questionlist[i] && (this.questionlist[i]["selected"] != null)) {
				this.totalAnswered++;
				if (this.questionlist[i]["selected"] == this.questionlist[i]["answer"]) {
					this.rightAnswer++;
				}
			}

    }
    this.completed=true;
  }
  
  
  timesUp(event) {
     if (event.action == "done") { 
    
    
      this.rightAnswer = 0;
      this.totalAnswered = 0;
      
      for (let i = 0; i < this.questionlist.length; i++) {
        if ("selected" in this.questionlist[i] && (this.questionlist[i]["selected"] != null)) {
          this.totalAnswered++;
          if (this.questionlist[i]["selected"] == this.questionlist[i]["answer"]) {
            this.rightAnswer++;
          }
        }
  
      }
      this.completed=true;
   } 
  }
  }


