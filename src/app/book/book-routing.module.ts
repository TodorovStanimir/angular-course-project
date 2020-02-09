// import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'all' },
    { path: 'all', component: ListComponent },
    { path: 'user', component: ListComponent},
    { path: 'create', component: CreateComponent },
    { path: 'details/:id', component: DetailComponent },
    { path: 'edit/:id', component: EditComponent },
];

// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [RouterModule]
// })
// export class BookRoutingModule { }

export const BookRoutingModule = RouterModule.forChild(routes);
