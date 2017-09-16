import { Component } from '@angular/core';
import {Router} from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: 'login.component.html'
})

export class LoginComponent {

  loginForm: FormGroup;
  error: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {

    this.loginForm = formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required]
    });

  }

  submitForm(value: object): void {

    const user = {
      email: value['email'],
      password: value['password']
    };

    this.authService.login(user)
      .then(res => {
        if (res === true) {
          this.router.navigate(['home']);
        } else {
          this.error = 'Wrong credentials';
        }
      });
  }

}
