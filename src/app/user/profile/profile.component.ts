import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { IUserInfo } from 'src/app/shared/interfaces/userInfo';
import { IUserChanged } from 'src/app/shared/interfaces/userChanged';
import { CommentService } from 'src/app/comment/comment.service';
import { BookService } from 'src/app/book/book.service';
import { forkJoin, of, Observable } from 'rxjs';
import { ICommentInfo } from 'src/app/shared/interfaces/commentInfo';
import { IBookInfo } from 'src/app/shared/interfaces/bookInfo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  editedUser: IUserInfo;
  userComments: ICommentInfo[];
  userBooks: IBookInfo[];
  // booksComments: Array<[string, number]> = [];
  booksComments: object[] = [];

  constructor(
    private userService: UserService,
    private bookService: BookService,
    private commentService: CommentService,
    private router: Router,
  ) {

  }

  ngOnInit() {
    const username = localStorage.getItem(`username`);
    forkJoin(
      this.userService.getUser(username),
      this.commentService.getAllComments('author', username),
      this.bookService.getUserBooks(),
      this.commentService.getAllComments('all', 'all')
    ).subscribe((res) => {
      this.editedUser = Object.assign(res[0][0]);
      this.userBooks = res[2].sort((a, b) => b.likes - a.likes);
      this.userComments = res[1];
      this.userBooks.map((book, ind) => {
        let counter = 0;
        res[3].map(comm => {
          if (comm[`bookId`] === book._id) { counter++; }
        });
        // this.booksComments.push([book.title, counter]);
        this.booksComments.push(Object.defineProperty({}, book.title, { value: counter }));
      });
    });
  }

  hadleEditUser(editUserForm: IUserChanged) {
    this.userService.changeUser(editUserForm, localStorage.getItem(`userId`))
      .subscribe((data: IUserInfo) => {
        this.userService.saveUserInfo(data);
        this.router.navigate([`/books/user`]);
      });
  }
}
