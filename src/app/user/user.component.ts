import { Component, OnInit, Input } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AnthenticationService } from '../services/anthentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loggedIn:boolean=true;
  quizlist: any;
  isSchool: boolean;
  constructor(private quiz: QuizService, private auth: AnthenticationService, private router: Router) { }

  ngOnInit() {
    this.isSchool = this.auth.isSchool;
    this.quiz.getallQuizs().subscribe((response) => {
      //alert(JSON.stringify(response))
      this.quizlist = response;
    }, (error: HttpErrorResponse) => {
      if (error instanceof Error) {
      } else {
      }
    }
    );
  }
  creatQuiz() {
    this.router.navigate(['create'])
  }
  attemptquizbyid(id) {
    if (this.auth.isLoggedIn) {
      this.quiz.setQuizCard(id);
      this.router.navigate(['attempt'])
    }
    else{
      this.loggedIn=false
      this.router.navigate(['user'])
    }
  }
}
