///////////////////////////////////////////////////////////////////////////////
//  This HTTP interceptor will replace /api/ paths with directus root paths  //
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
    // TODO: get the directus base from configuration

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.indexOf('/api') === 0) {
            let apiRoot = window.location.protocol + "//" + window.location.hostname + ":8888";
            console.log(request.urlWithParams);
            return next.handle(request.clone({
                url: request.url.replace("/api", apiRoot + "/api/1.1")
            }));
        } else return next.handle(request);
    }
}
