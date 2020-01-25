import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { AngularFireModule } from 'angularfire2'
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { GoogleChartsModule } from 'angular-google-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HowDoYouFeelComponent } from './app/how-do-you-feel/how-do-you-feel.component';
import { WhyDoYouFeelComponent } from './app/why-do-you-feel/why-do-you-feel.component';
import { HomeComponent } from './app/home/home.component';
import { AboutFaqComponent } from './app/about-faq/about-faq.component';
import { DataComponent } from './app/data/data.component';
import { HeaderComponent } from './app/header/header.component';
import { LoginComponent } from './app/login/login.component';
import { SignUpComponent } from './app/sign-up/sign-up.component';
import { ResultsHowDoYouFeelComponent } from './app/results-how-do-you-feel/results-how-do-you-feel.component';

@NgModule({
  declarations: [
    AppComponent,
    HowDoYouFeelComponent,
    WhyDoYouFeelComponent,
    ResultsHowDoYouFeelComponent,
    HomeComponent,
    AboutFaqComponent,
    HeaderComponent,
    ResultsYouFeelComponent,
    DataComponent,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'rnifdb'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    GoogleChartsModule.forRoot(),
    NgbModule,
    FontAwesomeModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
