import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { APP_KEY } from '../core/kinvey.tokens';
import { IUser } from '../shared/interfaces/user';
import { IUserInfo } from '../shared/interfaces/userInfo';
import { IUserChanged } from '../shared/interfaces/userChanged';

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
    return this.http.post(this.BASE_URL, user);
  }

  login(body: object) {
    return this.http.post(`${this.BASE_URL}/login`, body);
  }

  logout() {
    return this.http.post(`${this.BASE_URL}/_logout`, {});
  }

  getUser(username: string) {
    return this.http.get<IUserInfo[]>(`${this.BASE_URL}/?query={"username":"${username}"}`);
  }

  changeUser(body: IUserChanged, id: string) {
    return this.http.put(`${this.BASE_URL}/${id}`, body);
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
