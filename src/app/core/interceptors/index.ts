import { DataApiInterceptor } from './data-api.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const CoreHttpInterceptors = [{
    provide: HTTP_INTERCEPTORS,
    useClass: DataApiInterceptor,
    multi: true
}];
