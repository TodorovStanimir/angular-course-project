import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { APP_KEY } from '../core/kinvey.tokens';
import { IBook } from '../shared/interfaces/book';
import { IBookInfo } from '../shared/interfaces/bookInfo';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly BASE_URL = `https://baas.kinvey.com/appdata/${APP_KEY}`;
  private readonly BOOKS_URL = `${this.BASE_URL}/books`;


  constructor(private http: HttpClient) { }


  createBook(body: IBook) {
    return this.http.post(this.BOOKS_URL, body);
  }

  getAllBooks() {
    return this.http.get<IBookInfo[]>(this.BOOKS_URL);
  }

  getUserBooks() {
    return this.http.get<IBookInfo[]>
      (`${this.BASE_URL}/books?query={"author":"${localStorage.getItem(`username`)}"}&sort={"_kmd.ect":-1}`);
  }

  deleteBook(id: string) {
    return this.http.delete(`${this.BOOKS_URL}/${id}`);
  }

  getBook(id: string) {
    return this.http.get<IBookInfo>(`${this.BOOKS_URL}/${id}`);
  }

  editBook(body: IBookInfo, id: string) {
    delete body[`${id}`];
    delete body[`${'_acl'}`];
    return this.http.put<IBookInfo>(`${this.BOOKS_URL}/${id}`, body);
  }
}
