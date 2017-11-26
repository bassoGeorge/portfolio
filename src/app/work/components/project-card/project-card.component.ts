///////////////////////////////////////////////////////////////////////////////
//         The basic project card which will give a short description        //
///////////////////////////////////////////////////////////////////////////////
import { Component, Input } from '@angular/core';
import { Project } from '../../models';

@Component({
    selector: 'project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.styl']
})
export class ProjectCard {
    @Input() project: Project;

    ngOnInit() {
    }

    select() {
        console.log("Clicked on project: "+this.project.title);
    }
}
