import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export class User {

  constructor(public name: string, public email: string, public password: string, public nickname: string, public gamesPlayed: number) {

  }

}

@Injectable()
export class UserService {

  private usersUrl = 'http://localhost:3000/users';  // URL to web api

  constructor(private http: Http) {

  }

  getUsers() {
    return this.http.get(this.usersUrl)
      .map((response: Response) => <User[]>response.json().data)
      .toPromise()
      .catch(this.handleError);
  }

  postUser(user: object) {
    return this.http
      .post(this.usersUrl, JSON.stringify(user))
      .toPromise()
      .then(res => console.log(res))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    const msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }

}
