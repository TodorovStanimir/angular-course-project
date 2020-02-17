import { HttpResponse, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ResponseHandlerInterceptor implements HttpInterceptor {

    constructor(
        private toastr: ToastrService,
        private router: Router
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(tap((success) => {
            if (success instanceof HttpResponse) {
                let result = '';
                if (success.status === 201) {
                    if (success.url.includes('user')) { result = 'Successfully registration!'; }
                    if (success.url.endsWith('books')) { result = 'Successfully created book!'; }
                    if (success.url.endsWith('comments')) { result = 'Successfully created comment!'; }
                }
                if (success.status === 200 && req.method === 'GET') {
                    if (success.url.endsWith('books')) { result = 'Successfully loaded all book!'; }
                    if (success.url.includes('/books?query={%22author%22')) { result = 'Successfully loaded user\'s books!'; }
                    if (!success.url.endsWith('books') && !success.url.includes('/books?query={%22author%22')) {
                        result = 'Successfully loaded book!';
                    }
                    if (success.url.endsWith('comments')) { result = 'Successfully loaded comments!'; }
                    if (success.url.includes('/comments?query={%22bookId%22')) { result = 'Successfully loaded books\'s comments!'; }
                }
                if (success.status === 200 && req.method === 'POST') {
                    if (success.url.endsWith('login')) { result = 'Successfully logged in!'; }
                }
                if (success.status === 200 && req.method === 'DELETE') {
                    if (success.url.includes('comments')) { result = 'Successful deleted comment!'; }
                    if (success.url.includes('books')) { result = 'Successful deleted book!'; }
                }
                if (success.status === 200 && req.method === 'PUT') {
                    if (success.url.includes('books')) { result = 'Successful edited book!'; }
                    if (success.url.includes('user')) { result = 'Successful edited Your profile!'; }
                }
                if (success.status === 204) {
                    if (success.url.endsWith('logout')) { result = 'Successful logged out!'; }
                }

                this.toastr.success(result);
            }
        }), catchError((err: HttpErrorResponse) => {

            this.toastr.error(err.error.description);

            err.status === 409
                ? this.router.navigate(['/profile/register'])
                : this.router.navigate(['/profile/login']);

            throw err;
        })
        );
    }
}
