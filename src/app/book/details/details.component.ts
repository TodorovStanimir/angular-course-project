import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { CommentService } from 'src/app/comment/comment.service';
import { IBookInfo } from 'src/app/shared/interfaces/bookInfo';
import { ICommentInfo } from 'src/app/shared/interfaces/commentInfo';
import { UserService } from 'src/app/user/user.service';
import { IComment } from 'src/app/shared/interfaces/comment';

@Component({
  selector: 'app-detail',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  book: IBookInfo;
  comments: ICommentInfo[];
  emailOwnerBook: string;
  phoneOwnerBook: string;
  showInfoOwnerBook = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private commentService: CommentService,
    private userService: UserService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params[`id`];
    this.bookService.getBook(id).subscribe((book) => {
      this.book = book;
      this.loadComments();
    });
  }

  deleteBook(id: string) {
    this.bookService.deleteBook(id).subscribe(() => {
      this.router.navigate(['/books/all']);
    });
  }

  postComment(body: IComment) {
    this.commentService.postComment(body).subscribe(() => {
      this.loadComments();
    });
  }

  loadComments() {
    this.commentService.getAllComments('bookId', this.book[`_id`])
      .subscribe((comments) => {
        this.comments = comments.reverse();
      });
  }

  delComment(id: string) {
    this.commentService.deleteComment(id).subscribe(() => {
      this.loadComments();
    });
  }

  isAuthor(book: IBookInfo) {
    return book[`_acl`][`creator`] === localStorage.getItem(`userId`);
  }

  rateBook(id: string, rate: string) {
    let newBook: IBookInfo;
    this.bookService.getBook(id).subscribe((book) => {
      newBook = book;
      rate === 'like' ? newBook[`likes`] += 1 : newBook[`dislikes`] += 1;
      this.bookService.editBook(newBook, id).subscribe(() => {
        this.ngOnInit();
      });
    });
  }

  showContact(bookAuthor: string) {
    this.showInfoOwnerBook = !this.showInfoOwnerBook;
    this.userService.getUser(bookAuthor)
      .subscribe((user) => {
        this.emailOwnerBook = user[0].email;
        this.phoneOwnerBook = user[0].phoneNumber;
      });

  }

}
