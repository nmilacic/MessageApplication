import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowMessageComponent } from './show-message/show-message.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { AuthGuard } from './auth/auth.guard';

/*const routes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'show', component: ShowMessageComponent, canActivate:[AuthGuard]},
  { path: 'user', component: RegistrationComponent},

];*/

const routes: Routes = [
  {path:'',redirectTo:'/user',pathMatch:'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  {path:'show',component:ShowMessageComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
