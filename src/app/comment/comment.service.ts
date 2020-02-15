import { Injectable } from '@angular/core';
import { APP_KEY } from '../core/kinvey.tokens';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICommentInfo } from '../shared/interfaces/commentInfo';
import { IComment } from '../shared/interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private readonly BASE_URL = `https://baas.kinvey.com/appdata/${APP_KEY}`;
  private readonly CREATE_COMMENT_URL = `${this.BASE_URL}/comments`;


  constructor(private http: HttpClient) { }

  getAllComments(criteria: string, bookId: string) {
    const searchedCriteria = criteria==='all' ? '' : `?query={"${criteria}":"${bookId}"}&sort={"_kmd.ect": -1}`;
    return this.http.get<ICommentInfo[]>(`${this.CREATE_COMMENT_URL}${searchedCriteria}`, {
      headers: new HttpHeaders({
        Authorization: `Kinvey ${localStorage.getItem('token')}`
      })
    });
  }

  postComment(body: IComment) {
    return this.http.post<ICommentInfo>(this.CREATE_COMMENT_URL, body, {
      headers: new HttpHeaders({
        Authorization: `Kinvey ${localStorage.getItem('token')}`
      })
    });
  }

  deleteComment(commentId: string) {
    return this.http.delete(`${this.CREATE_COMMENT_URL}/${commentId}`, {
      headers: new HttpHeaders({
        Authorization: `Kinvey ${localStorage.getItem('token')}`
      })
    });
  }


}
