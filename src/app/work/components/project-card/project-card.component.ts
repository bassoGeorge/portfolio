///////////////////////////////////////////////////////////////////////////////
//         The basic project card which will give a short description        //
///////////////////////////////////////////////////////////////////////////////
import { Component, Input } from '@angular/core';
import { Project } from '../../models';

@Component({
    selector: 'project-card',
    template: `<div class="bg-inverse fg-inverse" style="height: 100%; width: 100%"></div>`
})
export class ProjectCard {
    @Input() project: Project;

    ngOnInit() {
    }
}
