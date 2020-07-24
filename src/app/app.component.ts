import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnthenticationService } from './services/anthentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz';
  constructor(private authService: AnthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['home'])
  }
  loggedIn() {
    if (this.authService.isLoggedIn == true)
      return true;
    else
      return false;

  }
  logout() {
    this.authService.accessToken = null;
    this.authService.loggedIn = false;
  }
  quiz(){
   // alert("kjhgf")
    this.router.navigate(['home'])
  }
}
