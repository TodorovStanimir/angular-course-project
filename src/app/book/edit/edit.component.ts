import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/shared/interfaces/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { ToastrService } from 'ngx-toastr';
import { IBookInfo } from 'src/app/shared/interfaces/bookInfo';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editedBook: IBookInfo;
  id: string = this.activatedRoute.snapshot.params[`id`];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.bookService.getBook(this.id).subscribe((book: IBookInfo) => {
      return this.editedBook = Object.assign(book, { genres: book.genres.join(' ') });
    });
  }

  hadleEditBook(newValueEditedBook: IBook) {
    const newBook: IBookInfo = Object.assign(this.editedBook, newValueEditedBook);
    newBook.genres = (newValueEditedBook.genres as any).split(' ');
    newBook.price = Number(newBook.price);
    this.bookService.editBook(newBook, this.id)
      .subscribe(data => {
        this.router.navigate(['/books/user']);
      });
  }

}
