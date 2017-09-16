import {Component} from '@angular/core';

import {AuthService} from '../services/auth.service';

@Component({
  templateUrl: 'home.component.html'
})

export class HomeComponent {

  constructor(private authService: AuthService) {

  }

  logout() {
    console.log('Deslogeo antes', sessionStorage.getItem('token'));
    this.authService.logout();
    console.log('Deslogeo despues', sessionStorage.getItem('token'));
  }

}
