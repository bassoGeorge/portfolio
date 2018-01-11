///////////////////////////////////////////////////////////////////////////////
//                 The details of the project, scrolling div                 //
///////////////////////////////////////////////////////////////////////////////
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models';

@Component({
    selector: 'project-details',
    templateUrl: './project-details.component.html',
    styleUrls: ['./project-details.component.styl']
})
export class ProjectDetails {
    @Input() project: Project;
    @Output() close = new EventEmitter();

    done() {
        this.close.emit(true);
    }
}
