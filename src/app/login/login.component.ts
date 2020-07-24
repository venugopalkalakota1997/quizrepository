import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnthenticationService } from '../services/anthentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  changeType: boolean;
  isType: boolean = true;
  cate = ["Login as..", "School", "Student"];

  constructor(private formBuild: FormBuilder, private authService: AnthenticationService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuild.group({
      username: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]],
      userType: [this.cate[0], [
        Validators.required
      ]]
    })
  }
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }
  toSignup() {
    this.router.navigate(['signup'])
  }
  get userType() {
    return this.loginForm.get('userType');
  }

  changeUserType($event) {
    if ($event.target.selectedIndex != 0) {
      this.changeType = false;
      this.isType = false;
    }
    else {
      this.changeType = true;
      this.isType = true;
    }
  }

}
