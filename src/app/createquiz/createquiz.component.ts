import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { QuizService } from '../services/quiz.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-createquiz',
  templateUrl: './createquiz.component.html',
  styleUrls: ['./createquiz.component.css']
})
export class CreatequizComponent implements OnInit {
  createQuizForm:FormGroup;
  newQuizAdded:boolean=false;
  createErrorMessage:any;
  arr: FormArray;
  
  
  constructor(private formBuilder: FormBuilder,private _quizservice:QuizService) { }

  createItem() {
    return this.formBuilder.group({
      question:['',
      [Validators.required]],
      a:['',
      [Validators.required]],
      b:['',
      [Validators.required]],
      c:['',
      [Validators.required]],
      d:['',
      [Validators.required]],
      answer:['',[Validators.required]]
    
    })
  }

  get quizname() {
    return this.createQuizForm.get('quizname');
  }

  get question() {
    return this.createQuizForm.get('question');
  }

  get option1() {
    return this.createQuizForm.get('option1');
  }
  get option2() {
    return this.createQuizForm.get('option2');
  }
  get option3() {
    return this.createQuizForm.get('option3');
  }
  get option4() {
    return this.createQuizForm.get('option4');
  }
  get answer() {
    return this.createQuizForm.get('answer');
  }


  ngOnInit() {
      this.createQuizForm = this.formBuilder.group({
      quizname:['',
      [Validators.required]],
      arr: this.formBuilder.array([this.createItem()])
    })
  }


  addItem() {
    this.arr = this.createQuizForm.get('arr') as FormArray;
    this.arr.push(this.createItem());
  }

  createQuiz(createQuizForm){
    let Quiz:any={
      "id":0,
      "quizName":createQuizForm.quizname,
      "questionsList":createQuizForm.arr
    }
    this._quizservice.createQuiz(Quiz).subscribe((response) => {
        //alert(response)
      this.newQuizAdded = true;
      this.createErrorMessage = null;
      
    }, (error: HttpErrorResponse) => {
      this.createErrorMessage = error.message;
      if (error instanceof Error) {
      } else {
      }
    })
  }
  }

