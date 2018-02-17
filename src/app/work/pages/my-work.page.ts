///////////////////////////////////////////////////////////////////////////////
//                             My work main page                             //
///////////////////////////////////////////////////////////////////////////////
import { Component, ElementRef } from '@angular/core';
import { Project, WorkPage } from '../models';
import { ConfigService, PageService } from '../../core';
import { WorkService } from '../work.service';
import { Observable } from 'rxjs/Rx';

import * as _ from 'underscore';

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

    // Current grid page
    currentPage: WorkPage = {page: 0, totalWeight: 0, tabletRows: 0, work: [], personal: [], other: []};

    // All grid pages we received from api yet
    allData: WorkPage[] = [];

    // An array of page ids available to us from api
    // We will not use the ids within this array for handling UI, instead, we will simply use
    // indexes of this pages array as page numbers from this component down the tree.
    // Only when requesting from API will we take into consideration the page id from inside array.
    pages: number[] = [];

    constructor(
        private workApi: WorkService,
        private elem: ElementRef,
        private pageService: PageService
    ) {

        // We setup the total number of pages
        workApi.getPages().subscribe(pages => {
            this.pages = _.map(pages, page => page['id']);
            this.goToPage(0);
        })
    }

    showDetails(project: Project) {
        this.selectedProject = project;

        // Checking if we have previously loaded this project's details
        // if not, we request them now and load
        // Since we are sharing class objects, this will be retrieved from
        // the api once
        if (project.fullDescription == undefined) {
            this.workApi.getProjectDetails(project).subscribe(desc => {
                project.fullDescription = desc;
            })
        }
        this.detailView = true;
    }

    closeDetails() {
        this.detailView = false;
        this.selectedProject = null;
    }

    retrievePageFromApi(pageIdx: number) {
        let pageNum = this.pages[pageIdx];
        return this.workApi.getProjectsForPage(pageNum)
            .reduce((acc, cur) => {
                acc[cur.type].push(cur);
                acc.totalWeight += cur.weight;
                return acc;
            }, {page: pageNum, totalWeight: 0, tabletRows: 0, work: [], personal: [], other: []})
            .map(workPage => {
                // For each personal/other we have a header wich takes up 2 grid places
                if (workPage.personal.length > 0) {
                    workPage.totalWeight += 2;
                }
                if (workPage.other.length > 0) {
                    workPage.totalWeight += 2;
                }
                return workPage;
            })
            .map(workPage => {
                // We setup the tablet rows
                /*
                  We have a grid system of 4 x 10
                  on Tablet, it has to go to 2 x 20
                  but the catch is, the row count can be lower to, anywhere from 1..20

                  The following alogithm finds the optimum row count.
                  Note: we rely on the api to populate the pages packed so that
                  we have batches of 10 each and the last batch may be less than 10.
                  */
                let x = workPage.totalWeight;
                let t1 = Math.floor(x / 20) * 10;
                let x2 = x % 20;
                let t2 = Math.max(
                    Math.floor(x2 / 10) * 10,
                    x2 % 10
                );

                workPage.tabletRows = t1 + t2;
                return workPage;
            })
        ;
    }

    goToPage(pageIdx: number) {
        let obs = (this.allData[pageIdx]) ? Observable.of(this.allData[pageIdx]) : this.retrievePageFromApi(pageIdx);
        obs.subscribe(page => {
            this.allData[pageIdx] = page;
            this.currentPage = page;
            this.pageService.scrollPageTo(this.elem, 0);
        });
    }
}
