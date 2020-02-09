import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { BookRoutingModule } from './book-routing.module';



@NgModule({
  declarations: [CreateComponent, EditComponent, DetailComponent, ListComponent],
  imports: [
    CommonModule,
    BookRoutingModule
  ],
  exports: [ListComponent, DetailComponent]
})
export class BookModule { }
