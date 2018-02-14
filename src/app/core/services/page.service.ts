///////////////////////////////////////////////////////////////////////////////
//                  Misc operations on the current main page                 //
///////////////////////////////////////////////////////////////////////////////
import { Injectable, ElementRef } from '@angular/core';

@Injectable()
export class PageService {

    scrollPageTo(page: ElementRef, pixel: number) {
        let native = page.nativeElement;
        if (native) {
            return this.scrollElemTo(
                native.getElementsByClassName("centered-container")[0],
                pixel
            );
        }
    }

    scrollElemTo(elem: any, pixel: number) {
        if (elem) {
            elem.scrollTop = pixel;
        }
    }
}
