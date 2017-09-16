import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../services/auth.service';

@Component({
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit{

  user: object;

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.getLoggedUser();
  }

  getLoggedUser() {
    this.user = this.authService.getLoggedUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
