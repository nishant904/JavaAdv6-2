import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [


  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
 


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
