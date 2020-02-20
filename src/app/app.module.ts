
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//servicios
import { AuthService } from './services/auth.service';

//Rutas
import { AppRoutingModule } from './app-routing.module';

//componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ManagementVacanciesComponent } from './components/management-vacancies/management-vacancies.component';
import { LinkCompaniesComponent } from './components/link-companies/link-companies.component';
import { PostulantsComponent } from './components/postulants/postulants.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SelectComponent } from './components/user/select/select.component';


//firebase
import { AngularFireModule } from '@angular/fire'; // Firebase config
import { AngularFirestoreModule } from '@angular/fire/firestore'; // For Cloud Firestore
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from '@angular/fire/auth';

// environment config
import{ environment } from '../environments/environment';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations:[
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    ManagementVacanciesComponent,
    LinkCompaniesComponent,
    PostulantsComponent,
    NavBarComponent,
    FooterComponent,
    HeaderComponent,
    SelectComponent,
    ModalComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),// Import firebase
    AngularFireAuthModule,
    AngularFirestoreModule, // Import firestore
    AppRoutingModule,
  ],
  providers: [ 
    AngularFireAuth,
    AuthService ,
    NavBarComponent,
    FooterComponent,
    HeaderComponent,
  ],
  entryComponents: [ ModalComponent],



  bootstrap: [AppComponent]
})
export class AppModule { }
