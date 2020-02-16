import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';




const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/profile/login' },
  { path: 'profile', loadChildren: './user/user.module#UserModule' },
  { path: 'books', loadChildren: './book/book.module#BookModule', canLoad: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
