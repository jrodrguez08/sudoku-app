import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: 'login.component.html'
})

export class LoginComponent {

  loginForm: FormGroup;

  constructor(formBuilder: FormBuilder) {

    this.loginForm = formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required]
    });

  }

  submitForm(value: any): void {

    console.log('Form Data: ');
    console.log(value);

  }

}
