import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICommentInfo } from '../../shared/interfaces/commentInfo';
import { IBookInfo } from 'src/app/shared/interfaces/bookInfo';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  @Input() comment: ICommentInfo;
  @Output() deleteCommentEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  delComment(id: string) {
    this.deleteCommentEmitter.emit(id);
  }

  isAuthor(book: IBookInfo) {
    return book[`_acl`][`creator`] === localStorage.getItem(`userId`);
  }

}
