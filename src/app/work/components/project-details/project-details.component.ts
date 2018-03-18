///////////////////////////////////////////////////////////////////////////////
//                 The details of the project, scrolling div                 //
///////////////////////////////////////////////////////////////////////////////
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'project-details',
    templateUrl: './project-details.component.html',
    styleUrls: ['./project-details.component.styl']
})
export class ProjectDetails {
    @Input() project: Project;
    @Output() close = new EventEmitter();

    closeBtnSVG: SafeHtml

    constructor(
        private ds: DomSanitizer
    ){
        this.closeBtnSVG = this.ds.bypassSecurityTrustHtml(
            require('./assets/green-close.svg')
        );
    }

    done() {
        this.close.emit(true);
    }
}
