import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { APP_KEY } from '../core/kinvey.tokens';
import { IBook } from '../shared/interfaces/book';
import { IBookInfo } from '../shared/interfaces/bookInfo';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly BASE_URL = `https://baas.kinvey.com/appdata/${APP_KEY}`;
  private readonly ALL_BOOKS_URL = `${this.BASE_URL}/books?query={}&sort={"_kmd.ect": -1}`;
  private readonly CREATE_BOOK_URL = `${this.BASE_URL}/books`;


  constructor(private http: HttpClient) { }


  createBook(body: IBook) {
    return this.http.post(this.CREATE_BOOK_URL, body, {
      headers: new HttpHeaders({
        Authorization: `Kinvey ${localStorage.getItem('token')}`
      })
    });
  }

  getAllBooks() {
    return this.http.get<IBookInfo[]>(this.ALL_BOOKS_URL, {
      headers: new HttpHeaders({
        Authorization: `Kinvey ${localStorage.getItem('token')}`
      })
    });
  }

  getUserBooks() {
    return this.http.get<IBookInfo[]>
      (`${this.BASE_URL}/books?query={"author":"${localStorage.getItem(`username`)}"}&sort={"_kmd.ect":-1}`, {
        headers: new HttpHeaders({
          Authorization: `Kinvey ${localStorage.getItem('token')}`
        })
      });
  }
}
