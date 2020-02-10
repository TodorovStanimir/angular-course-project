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

  // allBooks: IBookInfo[] = [{
  //   _id: '1',
  //   title: 'Just title',
  //   // author: 'Stanimir Todorov',
  //   bookAuthor: 'Petar Petrov',
  //   //   year: 1955,
  //   description: 'This is very simple description',
  //   //   publisher: 'Any',
  //   genres: ['qqqqq', 'wwwww', 'eeeee'],
  //   imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/War_official_poster.jpg/220px-War_official_poster.jpg',
  //   //   price: 1950,
  //   //   likes: 0,
  //   //   dislikes: 0
  // }];
  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
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

  isAuthor(book: IBookInfo) {
    return book[`_acl`][`creator`] === localStorage.getItem(`userId`);
  }

  deleteBook(id: string) {
    console.log(id);
  }

}
