import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AnthenticationService } from '../services/anthentication.service';
import { School } from '../interfaces/school';
import { Student } from '../interfaces/student';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  userType: boolean = false;
  userAdded: boolean = false;
  signupErrorMessage: any;
  mentorAdded: boolean = false;
  newUserAdded: boolean = true;

  constructor(private formBuilder: FormBuilder, private _authService: AnthenticationService, private _userService: UserService) { }

  ngOnInit() {
    
    this.signUpForm = this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]],
      firstname: ['', [
        
      ]],
      lastname: ['', [
        
      ]],
      password: ['', [
        Validators.required,
        Validators.maxLength(50)
      ]],
      confirmPassword: ['', [
        Validators.required,
        this.matchConfirmPassword.bind(this)
      ]],
      schoolname: ['', [
        

      ]]
    })
  }

  get username() {
    return this.signUpForm.get('username');
  }
  get firstname() {
    return this.signUpForm.get('firstname');
  }
  get lastname() {
    return this.signUpForm.get('lastname');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }
  get schoolname(){
    return this.signUpForm.get('schoolname');
  }
  matchConfirmPassword(formControl: FormControl): { [s: string]: boolean } {
    if (this.signUpForm) {
      if (formControl.value && formControl.value.length > 0 && formControl.value !== this.signUpForm.get('password').value) {
        return { 'nomatch': true };
      }
    }
    return null;
  }

  userSignUp() {
    this.userType = !this.userType;
    
  }

  addUser(signUpForm) {

    if (this.userType) {
      let school: School =
      {
        "id": 0,
        "userName": signUpForm.username,
        "password": signUpForm.password,
        "schoolName":signUpForm.schoolname
      }

      this._userService.schoolSignUp(school).subscribe((response) => {
        
        this.userAdded = true;
        this.signupErrorMessage = null;
        this.newUserAdded = false;
      }, (error: HttpErrorResponse) => {
        this.signupErrorMessage = error.message;
        if (error instanceof Error) {
        } else {
        }
      })
    }
    else {
      let student: Student =
      {
        "id": 0,
        "userName": signUpForm.username,
        "firstName": signUpForm.firstname,
        "lastName": signUpForm.lastname,
        "password": signUpForm.password,
      }

      this._userService.studentSignUp(student).subscribe((response) => {
        this.mentorAdded = true;
        this.newUserAdded = false;
        this.signupErrorMessage = null;
      }, (error: HttpErrorResponse) => {
        this.signupErrorMessage = error.message;
        if (error instanceof Error) {
        } else {
        }
      })

    }
  }
}
