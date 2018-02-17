///////////////////////////////////////////////////////////////////////////////
//                      The work grid display component                      //
///////////////////////////////////////////////////////////////////////////////
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WorkGridPage, Project } from '../../models';


@Component({
    selector: 'work-grid',
    templateUrl: './work-grid.component.html',
    styleUrls: ['/work-grid.component.styl']
})
export class WorkGrid {
    @Input() page: WorkGridPage

    @Output() select = new EventEmitter();

    selectProject(project: Project) {
        this.select.emit(project);
    }
}
