///////////////////////////////////////////////////////////////////////////////
//                   The Navigation component for work grid                  //
///////////////////////////////////////////////////////////////////////////////
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import * as _ from 'underscore';

@Component({
    selector: 'grid-navigation',
    templateUrl: './grid-navigation.component.html',
    styleUrls: ['./grid-navigation.component.styl']
})
export class GridNavigation {
    pages: number[] // We use this to iterrate in ui

    @Input() set pageCount(value: number) {
        this.pages = _.range(value);
    }
    get pageCount(): number {
        return this.pages.length;
    }

    @Input() currentPage?: number; // index

    @Output() pageChange = new EventEmitter();

    assets: any = {
        leftArrow: null,
        rightArrow: null
    };

    constructor(
        private ds: DomSanitizer
    ) {
        this.assets.leftArrow  = this.ds.bypassSecurityTrustHtml(require('./assets/grid-left-arrow.svg'));
        this.assets.rightArrow = this.ds.bypassSecurityTrustHtml(require('./assets/grid-right-arrow.svg'));
    }

    ngOnInit(){
        if (this.currentPage == undefined || this.currentPage == null) {
            this.currentPage = 0
        }
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
