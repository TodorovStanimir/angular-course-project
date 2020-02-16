import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanLoad {

    constructor(private router: Router, private userService: UserService) { }

    canLoad(route: Route, segments: UrlSegment[]) {
        if (this.userService.isAuthenticated()) {
            return true;
        }

        this.router.navigate(['/profile/login']);
        return false;
    }
}
