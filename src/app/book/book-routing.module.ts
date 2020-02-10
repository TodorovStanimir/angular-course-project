// import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { BooksComponent } from './books/books.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'all' },
    { path: 'all', component: BooksComponent },
    { path: 'user', component: BooksComponent },
    { path: 'create', component: CreateComponent },
    { path: 'details/:id', component: DetailComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [RouterModule]
// })
// export class BookRoutingModule { }

export const BookRoutingModule = RouterModule.forChild(routes);
