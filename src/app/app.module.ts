import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { CreatequizComponent } from './createquiz/createquiz.component';
import { AttemptquizComponent } from './attemptquiz/attemptquiz.component';
import { CountdownModule } from 'ngx-countdown';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    CreatequizComponent,
    AttemptquizComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CountdownModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
