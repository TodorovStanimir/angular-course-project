import { Injectable } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UserGuard implements CanActivate {

    constructor(private router: Router, private userService: UserService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (!this.userService.isAuthenticated()) {
            return true;
        }

        this.router.navigate(['/books/all']);
        return false;
    }

}
