import { DataApiInterceptor } from './data-api.interceptor';
import { CachingInterceptor } from './caching.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const CoreHttpInterceptors = [{
    provide: HTTP_INTERCEPTORS,
    useClass: DataApiInterceptor,
    multi: true
}, {
    provide: HTTP_INTERCEPTORS,
    useClass: CachingInterceptor,
    multi: true
}];
