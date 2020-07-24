import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AnthenticationService } from './anthentication.service';
import { Student } from '../interfaces/student';
import { environment } from 'src/environments/environment';
import { School } from '../interfaces/school';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  addschoolUrl=environment.add;
  constructor(private _httpClient: HttpClient, private _authService: AnthenticationService) { }
  private subject = new Subject<any>();
  adduserUrl = environment.add;
  studentSignUp(userSignUpData: Student) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    return this._httpClient.post<Student>(this.adduserUrl + '/addstudent', userSignUpData,{ headers });
  }

  schoolSignUp(schoolSignUpData: School) {
    //alert(JSON.stringify(schoolSignUpData));
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    return this._httpClient.post<School>(this.addschoolUrl + '/addschool', schoolSignUpData,{ headers });

  }
}
