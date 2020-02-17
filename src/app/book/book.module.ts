import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { BooksComponent } from './books/books.component';
import { CommentCreateComponent } from '../comment/comment-create/comment-create.component';
import { CommentDetailsComponent } from '../comment/comment-details/comment-details.component';
import { BookRoutingModule } from './book-routing.module';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    DetailsComponent,
    BooksComponent,
    CommentCreateComponent,
    CommentDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    BookRoutingModule
  ],
  exports: []
})
export class BookModule { }
