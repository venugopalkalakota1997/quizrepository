import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { CreatequizComponent } from './createquiz/createquiz.component';
import { AttemptquizComponent } from './attemptquiz/attemptquiz.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent}, 
  {path:'user',component:UserComponent},
  {path:'create',component:CreatequizComponent},
  {path:'attempt',component:AttemptquizComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
