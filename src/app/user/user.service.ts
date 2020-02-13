import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { APP_KEY, APP_SECRET } from '../core/kinvey.tokens';
import { IUser } from '../shared/interfaces/user';
import { IUserInfo } from '../shared/interfaces/userInfo';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private readonly BASE_URL = `https://baas.kinvey.com/user/${APP_KEY}`;

  constructor(private http: HttpClient) { }

  get token() {
    return localStorage.getItem('token');
  }

  register(user: IUser) {
    return this.http.post(this.BASE_URL, user,
      {
        headers: new HttpHeaders({
          Authorization: `Basic ${btoa(`${APP_KEY}:${APP_SECRET}`)}`,
          'Content-Type': 'application/json'
        })
      });
  }

  login(body: object) {
    return this.http.post(`${this.BASE_URL}/login`, body, {
      headers: new HttpHeaders({
        Authorization: `Basic ${btoa(`${APP_KEY}:${APP_SECRET}`)}`,
        'Content-Type': 'application/json'
      })
    });
  }

  logout() {
    return this.http.post(`${this.BASE_URL}/_logout`, {}, {
      headers: new HttpHeaders({
        Authorization: `Kinvey ${this.token}`
      })
    });
  }

  getUser(username: string) {
    return this.http.get<IUserInfo[]>(`${this.BASE_URL}/?query={"username":"${username}"}`, {
      headers: new HttpHeaders({
        Authorization: `Kinvey ${this.token}`,
        'Content-Type': 'application/json'
      })
    });
  }

  isAuthenticated() {
    return this.token !== null;
  }

  saveUserInfo(res: object) {
    localStorage.setItem(`username`, res[`username`]);
    localStorage.setItem(`token`, res[`_kmd`][`authtoken`]);
    localStorage.setItem(`userId`, res[`_id`]);
  }

}
