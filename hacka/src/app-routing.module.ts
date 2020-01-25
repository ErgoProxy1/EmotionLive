import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HowDoYouFeelComponent } from './app/how-do-you-feel/how-do-you-feel.component';
import { WhyDoYouFeelComponent } from './app/why-do-you-feel/why-do-you-feel.component';
import { HomeComponent } from './app/home/home.component';
import { AboutFaqComponent } from './app/about-faq/about-faq.component'
import { ResultsYouFeelComponent } from './app/results-you-feel/results-you-feel.component';
import { DataComponent } from './app/data/data.component';
import { LoginComponent } from './app/login/login.component';
import { SignUpComponent } from './app/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'how-do-you-feel', component: HowDoYouFeelComponent },
  { path: 'why-do-you-feel/:emotion', component: WhyDoYouFeelComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about-faq', component: AboutFaqComponent },,
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'results-you-feel', component: ResultsYouFeelComponent },
  { path: 'data', component: DataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }