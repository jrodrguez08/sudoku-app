import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AuthService {

  private loginUrl = 'http://localhost:3000/login';  // URL to web api

  constructor(private http: Http) {

  }

  login(body: object) {
    return this.http
      .post(this.loginUrl, body)
      .map(this.getData)
      .toPromise()
      .catch(this.handleError);
  }

  logout() {
    sessionStorage.removeItem('token');
  }

  getLoggedUser() {
    return JSON.parse(sessionStorage.getItem('user'));
  }

  private getData(data: Response) {
    const token = data.json();
    if (token.data.data.token) {
      sessionStorage.setItem('token', token.data.data.token);
      sessionStorage.setItem('user', JSON.stringify(token.data.data.user));
      return true;
    }
    return false;
  }

  private handleError(error: Response) {
    const msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }

}
