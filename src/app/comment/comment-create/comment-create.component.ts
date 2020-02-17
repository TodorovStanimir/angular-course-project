import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICommentInfo } from 'src/app/shared/interfaces/commentInfo';
import { IComment } from 'src/app/shared/interfaces/comment';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {

  @ViewChild('createComment', { static: false }) createCommentF: NgForm;
  @Input() bookId: string;
  @Input() comments: ICommentInfo[];
  @Output() createCommentEmitter = new EventEmitter<IComment>();

  constructor() { }

  ngOnInit() {
  }

  postComment() {
    const body = this.createCommentF.value;
    body[`bookId`] = this.bookId;
    body[`author`] = localStorage.getItem(`username`);
    this.createCommentEmitter.emit(body);
    this.createCommentF.reset();
  }

}
