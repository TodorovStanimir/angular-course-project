import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { IBookInfo } from 'src/app/shared/interfaces/bookInfo';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  allBooks: IBookInfo[];

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  fetchData() {
    this.route.url.subscribe((s: UrlSegment[]) => {
      if (s['0'].path === 'all') {
        this.bookService.getAllBooks().subscribe((data) => {
          this.allBooks = data;
        });
      } else {
        this.bookService.getUserBooks().subscribe((data) => {
          this.allBooks = data;
        });
      }
    });
  }

  ngOnInit() {
    this.fetchData();
  }

  deleteBook(id: string) {
    this.bookService.deleteBook(id).subscribe(() => {
      this.fetchData();;
    });
  }

  isAuthor(book: IBookInfo) {
    return book[`_acl`][`creator`] === localStorage.getItem(`userId`);
  }



}
