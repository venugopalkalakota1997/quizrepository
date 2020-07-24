import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AnthenticationService } from './anthentication.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  
  
  constructor(private _httpClient: HttpClient, private _authService: AnthenticationService) { }
  allquiz=environment.allquiz
  selectedCard: any;
  getallQuizs() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    //alert(JSON.stringify(headers));
    return this._httpClient.get<any>(this.allquiz + "/allquiz" , { headers })
  }

  createQuiz(quiz: any) {
    //alert(JSON.stringify(quiz))
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
   // alert(JSON.stringify(headers));
    return this._httpClient.post<any>(this.allquiz + "/create" , quiz, { headers })
  }


  getallQuestions(id) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
   // alert(JSON.stringify(headers));
    return this._httpClient.get<any>(this.allquiz + "/questions/"+id , { headers })
  }
  
  public setQuizCard(id: any) {
    //alert(id)
    this.selectedCard = id;
  }
  public getQuizCard(){
    return this.selectedCard
  }
}
