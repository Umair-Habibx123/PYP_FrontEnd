import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { WhyPortalComponent } from './components/why-portal/why-portal.component';
import { TeamComponent } from './components/team/team.component';
import { SuccessStoryComponent } from './components/success-story/success-story.component';
import { ContactComponent } from './components/contact/contact.component';
import { FAQComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { JobComponent } from './components/job/job.component';
import { Blogs2Component } from './components/blogs2/blogs2.component';
import { BlogService } from '../app/services/blog.service';
import { TrainingComponent } from './components/training/training.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Form1Component } from './components/form1/form1.component';
import { Form2Component } from './components/form2/form2.component';
import { Form3Component } from './components/form3/form3.component';
import { ForgotScreenComponent } from './components/forgot-screen/forgot-screen.component';
import { EnterCodeComponent } from './components/enter-code/enter-code.component';
import { UserDashboardComponent } from './Dashboard/User/user-dashboard/user-dashboard.component';
import { OverviewComponent } from './Dashboard/User/user-dashboard/overview/overview.component';
import { AppliedJobsComponent } from './Dashboard/User/user-dashboard/applied-jobs/applied-jobs.component';
import { FavouriteJobsComponent } from './Dashboard/User/user-dashboard/favourite-jobs/favourite-jobs.component';
import { JobAlertsComponent } from './Dashboard/User/user-dashboard/job-alerts/job-alerts.component';
import { PrivacyPolicyComponent } from './Dashboard/shared/privacy-policy/privacy-policy.component';
import { SettingsComponent } from './Dashboard/shared/settings/settings.component';
import { AdminDashboardComponent } from './Dashboard/Admin/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './Dashboard/Admin/admin-dashboard/dashboard/dashboard.component';
import { RecordComponent } from './Dashboard/Admin/admin-dashboard/record/record.component';
import { TrainingsComponent } from './Dashboard/Admin/admin-dashboard/trainings/trainings.component';
import { FormsModule } from '@angular/forms';
import { ConfigurationComponent } from './Dashboard/Admin/admin-dashboard/configuration/configuration.component';
import { SliderTabComponent } from './Dashboard/Admin/admin-dashboard/configuration/slider-tab/slider-tab.component';
import { BlogsTabComponent } from './Dashboard/Admin/admin-dashboard/configuration/blogs-tab/blogs-tab.component';
import { AboutUsTabComponent } from './Dashboard/Admin/admin-dashboard/configuration/about-us-tab/about-us-tab.component';
import { SliderModalComponent } from './Dashboard/Admin/admin-dashboard/configuration/slider-modal/slider-modal.component';
import { BlogsModalComponent } from './Dashboard/Admin/admin-dashboard/configuration/blogs-modal/blogs-modal.component';
import { AboutUsModalComponent } from './Dashboard/Admin/admin-dashboard/configuration/about-us-modal/about-us-modal.component';
import { TestimonialsComponent } from './Dashboard/Admin/admin-dashboard/testimonials/testimonials.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    OurServicesComponent,
    WhyPortalComponent,
    TeamComponent,
    SuccessStoryComponent,
    ContactComponent,
    FAQComponent,
    FooterComponent,
    BlogsComponent,
    JobComponent,
    Blogs2Component,
    TrainingComponent,
    LoginComponent,
    RegisterComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    ForgotScreenComponent,
    EnterCodeComponent,
    UserDashboardComponent,
    OverviewComponent,
    AppliedJobsComponent,
    FavouriteJobsComponent,
    JobAlertsComponent,
    PrivacyPolicyComponent,
    SettingsComponent,
    AdminDashboardComponent,
    DashboardComponent,
    RecordComponent,
    TrainingsComponent,
    ConfigurationComponent,
    SliderTabComponent,
    BlogsTabComponent,
    AboutUsTabComponent,
    SliderModalComponent,
    BlogsModalComponent,
    AboutUsModalComponent,
    TestimonialsComponent,
    BannerComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [BlogService],

  bootstrap: [AppComponent]
})
export class AppModule { }
