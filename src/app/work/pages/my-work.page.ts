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
    projects: { weight: number, project: Project }[] = [{
        weight: 6, project: new Project("WADI", "Email and SMS campaign delivery system", ['Google APIs', 'SQL'])
    },{
        weight: 4, project: new Project("Bigstream", "Data flows and process pipelines", ['CSS'])
    },{
        weight: 7, project: new Project("Enfold", "Personal Digital Locker", ["AngularJS", "Python", "Microservices"])
    },{
        weight: 3, project: new Project("BooksPlus", "AR for Books", ["CSS", "Wordpress"])
    },{
        weight: 10, project: new Project("poundWISHES", "Crowdfunding for pet shelters", ["CakePHP"])
    }]
}
