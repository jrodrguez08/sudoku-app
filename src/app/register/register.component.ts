import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {matchOtherValidator} from '../utils/matchOther.validator';
import {UserService} from '../services/user.service';

@Component({
  templateUrl: 'register.component.html'
})

export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private usersService: UserService, private router: Router) {

    this.registerForm = formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.compose([Validators.required, matchOtherValidator('password')])],
      nickname: ''
    });

  }

  submitForm(value: object) {

    const user = {
      name: value['name'],
      email: value['email'],
      password: value['password'],
      nickname: value['nickname']
    };

    this.usersService.postUser(user).then(res => {

      if (res['status'] === 200) {

        this.router.navigate(['login']);
      }

    });

  }

}
