import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { BooksComponent } from './books/books.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'all' },
    { path: 'all', component: BooksComponent },
    { path: 'user', component: BooksComponent },
    { path: 'create', component: CreateComponent },
    { path: 'details/:id', component: DetailsComponent },
    { path: 'edit/:id', component: EditComponent }
];

export const BookRoutingModule = RouterModule.forChild(routes);
