import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { matchOtherValidator } from '../utils/matchOther.validator';
import { UserService } from '../services/user.service';

@Component({
  templateUrl: 'register.component.html'
})

export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private usersService: UserService) {

    this.registerForm = formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.compose([Validators.required, matchOtherValidator('password')])],
      nickname: ''
    });

  }

  submitForm(value: object): void {

    console.log(value);

    this.usersService.postUser(value);
  }

}
