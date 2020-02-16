import { HttpResponse, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UserService } from '../../user/user.service';
import { APP_KEY, APP_SECRET } from '../kinvey.tokens';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(
        private userService: UserService,
        private toastr: ToastrService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.endsWith(`/user/${APP_KEY}`) || req.url.endsWith(`login`)) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Basic ${btoa(`${APP_KEY}:${APP_SECRET}`)}`,
                    'Content-Type': 'application/json'
                }
            });
        } else {
            req = req.clone({
                setHeaders: {
                    Authorization: `Kinvey ${this.userService.token}`,
                    'Content-Type': 'application/json'
                }
            });
        }
        return next.handle(req)
            .pipe(
                tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse && req.url.endsWith(`login`)) {
                        // this.toastr.success('Logged in succesfully');
                        this.userService.saveUserInfo(event.body);
                    }
                })
            );
    }
}
