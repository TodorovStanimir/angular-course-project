import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBook } from 'src/app/shared/interfaces/book';
import { BookService } from '../book.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit() {
  }

  hadleCreateBook(book: IBook) {
    const newBook: IBook = Object.assign(book, { likes: 0, dislikes: 0, author: localStorage.getItem('username') });
    newBook.genres = (newBook.genres as any).split(' ');
    newBook.price = Number(newBook.price);

    this.bookService.createBook(newBook)
      .subscribe(data => {
        this.router.navigate(['/books/all']);
      });
  }

}
