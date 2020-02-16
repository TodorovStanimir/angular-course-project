import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserGuard } from '../core/guards/user.guard';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent, canActivate: [UserGuard] },
    { path: 'profile', component: ProfileComponent },
    { path: 'register', component: RegisterComponent, canActivate: [UserGuard]  },
    // { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [RouterModule]
// })
// export class FurnitureRoutingModule { }

export const UserRoutingModule = RouterModule.forChild(routes);
