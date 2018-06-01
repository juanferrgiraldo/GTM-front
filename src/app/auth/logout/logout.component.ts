import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: `
                <div class="col-md-8 col-md-offset-2">
                    <button class="btn btn-outline-danger" (click)="onLogout()">Logout</button>
                </div>`,
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/signin');
  }
  ngOnInit() {
  }

}
