///////////////////////////////////////////////////////////////////////////////
//     This HTTPinterceptor will replace the base path with data-api host    //
///////////////////////////////////////////////////////////////////////////////
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataApiInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // If it is not an absolute url, we route it to directus
        // TODO: get the directus base from configuration
        if (request.url.indexOf('http') !== 0) {
            let apiRoot = window.location.protocol + "//" + window.location.hostname + ":8888";
            return next.handle(request.clone({
                url: apiRoot + "/api/1.1" + request.url
            }));
        } else return next.handle(request);
    }
}
