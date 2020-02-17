import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { IBookInfo } from 'src/app/shared/interfaces/bookInfo';
import { BookService } from '../book.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  allBooks$: Observable<IBookInfo[]>;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.url.subscribe((s: UrlSegment[]) => {
      if (s['0'].path === 'all') {
        this.allBooks$ = this.bookService.getAllBooks();
      } else {
        this.allBooks$ = this.bookService.getUserBooks();
      }
    });
  }

  deleteBook(id: string) {
    this.bookService.deleteBook(id)
      .subscribe(() => {
        this.allBooks$ = this.bookService.getUserBooks();
      });
  }

  isAuthor(book: IBookInfo) {
    return book[`_acl`][`creator`] === localStorage.getItem(`userId`);
  }

}
