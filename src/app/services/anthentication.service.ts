import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnthenticationService {

  isSchool:boolean=false;
  loggedInUser = { loggedOut: true };
  isLoggedIn: boolean;
  validCredentials: boolean = false;
  accessToken: string;
  redirectUrl = '/';
  loggedIn: boolean = false;
  name: string;
  authUrl = environment.authUrl;
  private token: string;
  error: any;
  suffix: string;
  username: any;
  isLoggedInValid: boolean = false;
  LoggedIn: any;


  constructor(private router: Router, private httpClient: HttpClient) { }

  authenticateUser(user) {
    this.isLoggedIn = true;
    
    if (user.userType == "School") {

      this.suffix = "s"
    }
    else if (user.userType == "Student") {
      this.suffix = "u"
    }
    this.authenticateSpring(user.username, user.password).subscribe((data) => {
      this.username = user.username;
      this.loggedInUser = user;
      this.validCredentials = true;
      this.loggedIn = true;
      this.setToken(data.token);
      this.name = user.username;
     

      if (data.role == "ROLE_s") {
        this.isSchool=true;
        this.router.navigate(['user']);
      }
      else if (data.role == "ROLE_u") {
        this.isSchool=false;
        this.router.navigate(['user']);
      }
      else {
        this.router.navigate(['login']);
      }
    },
      (error) => {
        this.validCredentials = false;
        this.isLoggedInValid = true;
        this.error = error.error.message;
        if (error.error.errors != null) {
          this.error = error.error.errors[0];

        }
      }
    )
  }

  public setToken(token: string) {
    this.token = token;
  }
  public getToken() {
    return this.token;
  }




  authenticateSpring(user: string, password: string): Observable<any> {
    var newUser = user + this.suffix
    let credentials = btoa(newUser + ':' + password);
    let headers = new HttpHeaders();
    
    headers = headers.set('Authorization', 'Basic ' + credentials)
    return this.httpClient.get(this.authUrl, { headers })
  }


}
