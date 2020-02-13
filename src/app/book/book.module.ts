import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { BooksComponent } from './books/books.component';
import { BookRoutingModule } from './book-routing.module';


@NgModule({
  declarations: [CreateComponent, EditComponent, DetailsComponent, BooksComponent],
  imports: [
    CommonModule,
    FormsModule,
    BookRoutingModule
  ],
  exports: []
})
export class BookModule { }
