import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SingupComponent } from './components/singup/singup.component';

/* Routing components */
const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'singup', component: SingupComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', redirectTo:'/home', pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
