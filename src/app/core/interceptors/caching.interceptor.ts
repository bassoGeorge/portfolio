///////////////////////////////////////////////////////////////////////////////
//                         Caches requests as needed                         //
///////////////////////////////////////////////////////////////////////////////
import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { CacheService } from '../services';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {

    constructor(
        private cache: CacheService
    ){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (!this.isCachable(request))
            return next.handle(this.cleanCacheParam(request))

        let key = this.buildCacheKey(request);
        return this.cache.get(key, next.handle(request));
    }

    buildCacheKey(request: HttpRequest<any>): string {
        return request.urlWithParams;
    }

    isCachable(request: HttpRequest<any>): boolean {
        return request.params.get('_cache') !== 'no';
    }

    cleanCacheParam(request: HttpRequest<any>) {
        return request.clone({
            params: request.params.delete('_cache')
        })
    }
}
