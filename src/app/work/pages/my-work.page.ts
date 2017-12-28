///////////////////////////////////////////////////////////////////////////////
//                             My work main page                             //
///////////////////////////////////////////////////////////////////////////////
import { Component } from '@angular/core';
import { Project } from '../models';
import { ConfigService } from '../../core';

import * as _ from 'underscore';

/* Handling projects with weights */
interface WProject {
    weight: number,
    project: Project
}

@Component({
    selector: 'my-work-page',
    templateUrl: './my-work.page.html',
    styleUrls: ['./my-work.page.styl']
})
export class MyWorkPage {

    // Whether to show the project details or not
    detailView = false;

    // The current selected project for details view
    selectedProject: Project;

    // All the data from configuration, split into pages
    allData: {page: number, work: WProject[], personal: WProject[], other: WProject[]}[] = [];

    // The three kinds of projects we have
    workProjects:     WProject[] = [];            // Main set of projects
    personalProjects: WProject[] = [];            // Auxilary personal project, gets a header card
    otherProjects:    WProject[] = [];            // Other projects, will get a similar header card

    constructor(private configService: ConfigService){
        var rawData = this.configService.getConfig('projects');
        var listToWProjects = (list: any[]): WProject[] =>
            _.map(list, (item) => ({
                weight: item.weight,
                project: new Project(
                    item.title,
                    item.short,
                    item.techs
                )
            }))
        this.allData = _.map(rawData, (item: any) => ({
            page: item.page,
            work: listToWProjects(item.work),
            personal: listToWProjects(item.personal),
            other: listToWProjects(item.other)
        }))
    }

    ngOnInit() {
        if (this.allData.length > 0) {
            this.workProjects = this.allData[0].work;
            this.personalProjects = this.allData[0].personal;
            this.otherProjects = this.allData[0].other;
        }
    }


    showDetails(project: Project) {
        this.selectedProject = project;
        this.detailView = true;
    }

    closeDetails() {
        this.detailView = false;
        this.selectedProject = null;
    }
}
