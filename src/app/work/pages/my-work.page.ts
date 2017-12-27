///////////////////////////////////////////////////////////////////////////////
//                             My work main page                             //
///////////////////////////////////////////////////////////////////////////////
import { Component } from '@angular/core';
import { Project } from '../models';


@Component({
    selector: 'my-work-page',
    templateUrl: './my-work.page.html',
    styleUrls: ['./my-work.page.styl']
})
export class MyWorkPage {
    detailView = false;
    selectedProject: Project;

    projects: { weight: number, project: Project }[] = [{
        weight: 5, project: new Project("WADI", "Email and SMS campaign delivery system", ['Google APIs', 'SQL'])
    },{
        weight: 5, project: new Project("Bigstream", "Data flows and process pipelines", ['CSS'])
    },{
        weight: 6, project: new Project("Enfold", "Personal Digital Locker", ["AngularJS", "Python", "Microservices"])
    },{
        weight: 4, project: new Project("BooksPlus", "AR for Books", ["CSS", "Wordpress"])
    },{
        weight: 10, project: new Project("poundWISHES", "Crowdfunding platform that enables animal-welfare organizations to create fundraising campaigns and find new donors.", ["CakePHP"])
    }]

    showDetails(project: Project) {
        this.selectedProject = project;
        this.detailView = true;
    }

    closeDetails() {
        this.detailView = false;
        this.selectedProject = null;
    }
}
