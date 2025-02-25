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

  isAuthPage(): boolean {
    return ['/login', '/register', '/forgot', '/entercode', '/user-dashboard', '/admin-dashboard'].includes(this.router.url);
  }
}