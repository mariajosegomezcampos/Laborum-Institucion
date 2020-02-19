import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementVacanciesComponent } from './components/management-vacancies/management-vacancies.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/user/login/login.component';                                  
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LinkCompaniesComponent } from './components/link-companies/link-companies.component';
import { PostulantsComponent } from './components/postulants/postulants.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'gestionavisos', component:  ManagementVacanciesComponent },
  { path: 'vinculacionempresa', component:  LinkCompaniesComponent },
  { path: 'postulantes', component:  PostulantsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
