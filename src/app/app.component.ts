import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'PakistanYouthProgram';

  constructor(private router: Router, private route: ActivatedRoute) { }

  isHomePage(): boolean {
    return this.router.url === '/';
  }
  isAboutPage(): boolean {
    return this.router.url === '/about-us';
  }
  isJobPage(): boolean {
    return this.router.url === '/jobs';
  }
  isTrainingPage(): boolean {
    return this.router.url === '/trainings';
  }
  isBlogsPage(): boolean {
    return this.router.url === '/blogs';
  }
  isContactPage(): boolean {
    return this.router.url === '/contact';
  }
  isFaqPage(): boolean {
    return this.router.url === '/faq';
  }
  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
  isRegisterPage(): boolean {
    return this.router.url === '/register';
  }
  isForgotPage(): boolean {
    return this.router.url === '/forgot';
  }
  isEnterCodePage(): boolean {
    return this.router.url === '/entercode';
  }
  isUserDashPage(): boolean {
    return this.router.url === '/user-dashboard';
  }
  isAdminDashPage(): boolean {
    return this.router.url === '/admin-dashboard';
  }

}
