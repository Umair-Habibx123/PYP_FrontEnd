import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './components/about-us/about-us.component';
import { Blogs2Component } from './components/blogs2/blogs2.component';
import { ContactComponent } from './components/contact/contact.component';
import { FAQComponent } from './components/faq/faq.component';
import { JobComponent } from './components/job/job.component';
import { TrainingComponent } from './components/training/training.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotScreenComponent } from './components/forgot-screen/forgot-screen.component';
import { EnterCodeComponent } from './components/enter-code/enter-code.component';
import { UserDashboardComponent } from './Dashboard/User/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './Dashboard/Admin/admin-dashboard/admin-dashboard.component';
import { BannerComponent } from './components/banner/banner.component';

const routes: Routes = [
  { path: '', component:  BannerComponent},
  { path: 'about-us', component: AboutUsComponent },
  { path: 'jobs', component: JobComponent },
  { path: 'trainings', component: TrainingComponent },
  { path: 'blogs', component: Blogs2Component },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ForgotScreenComponent },
  { path: 'entercode', component: EnterCodeComponent },
  {path: 'user-dashboard', component: UserDashboardComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect unknown paths to Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
