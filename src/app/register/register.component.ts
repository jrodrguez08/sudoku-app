import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { matchOtherValidator } from '../utils/matchOther.validator';

@Component({
  templateUrl: 'register.component.html'
})

export class RegisterComponent {

  registerForm: FormGroup;

  constructor(formBuilder: FormBuilder) {

    this.registerForm = formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.compose([Validators.required, matchOtherValidator('password')])],
      nickname: ''
    });

  }

  submitForm(value: any): void {

    console.log('Form Data: ');
    console.log(value);

  }

}
