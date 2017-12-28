///////////////////////////////////////////////////////////////////////////////
//                   The Navigation component for work grid                  //
///////////////////////////////////////////////////////////////////////////////
import { Component, Input, Output, EventEmitter } from '@angular/core';

import * as _ from 'underscore';

@Component({
    selector: 'grid-navigation',
    templateUrl: './grid-navigation.component.html',
    styleUrls: ['./grid-navigation.component.styl']
})
export class GridNavigation {
    @Input() pageCount: number;
    @Input() currentPage?: number; // index

    @Output() pageChange = new EventEmitter();

    pages: number[];

    ngOnInit(){
        if (this.currentPage == undefined || this.currentPage == null) {
            this.currentPage = 0
        }
        this.pages = _.range(this.pageCount);
    }

    notify() {
        this.pageChange.emit(this.currentPage)
    }

    goToPageIndex(idx: number) {
        if (this.currentPage != idx) {
            this.currentPage = idx;
            this.notify();
        }
    }

    next =     () => this.goToPageIndex((this.currentPage + 1) % this.pageCount);
    previous = () => this.goToPageIndex((this.currentPage + this.pageCount - 1) % this.pageCount);
}
