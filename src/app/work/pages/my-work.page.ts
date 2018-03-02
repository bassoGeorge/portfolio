///////////////////////////////////////////////////////////////////////////////
//                             My work main page                             //
///////////////////////////////////////////////////////////////////////////////
import { Component, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Project, WorkGridPage } from '../models';
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

    // Current grid page as a getter
    get currentPage(): WorkGridPage {
        return this.allData[this.currentPageNumber];
    }

    // All grid pages we received from api yet
    // TODO: think about using a Map for this
    allData: WorkGridPage[] = [];

    // An array of page ids available to us from api
    // We will not use the ids within this array for handling UI, instead, we will simply use
    // indexes of this pages array as page numbers from this component down the tree.
    // Only when requesting from API will we take into consideration the page id from inside array.
    pages: number[] = [];

    // Current page number (index you know)
    currentPageNumber:number = null;


    // Need a loads of things
    constructor(
        private elem: ElementRef,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,
        private workApi: WorkService,
        private pageService: PageService
    ) {}

    ngOnInit() {
        // Getting initial page number from query params
        let pageNo = this.route.queryParamMap
            .map((params: ParamMap) => params.get('page') || 1)
            .map(parseInt)
        ;

        // Getting list of page ids from api
        let pages = this.workApi.getPages()
            .map(pages => _.map(pages, page => page['id']));

        // Making sure we do both together
        Observable.zip(pageNo, pages)
            .subscribe(data => {
                this.pages = data[1];
                this.goToPageId(data[0]);
            })
    }

    /* Navigating between pages
       ====================================================== */
    // Go to a given page by index
    goToPage(pageIdx: number) {

        let obs = (this.allData[pageIdx]) ?
            Observable.of(pageIdx)
            :
            this.retrievePageFromApi(pageIdx)
            .map(page => {
                this.allData[pageIdx] = page;
                return pageIdx;
            });

        obs.subscribe(pageIdx => {
            this.currentPageNumber = pageIdx;

            // Scroll to top
            this.pageService.scrollPageTo(this.elem, 0);

            // Update the URL, don't do a refresh
            let newRoute = this.router
                .createUrlTree([], {
                    queryParams: {
                        page: this.pages[pageIdx]
                    },
                    queryParamsHandling: "merge",
                    relativeTo: this.route
                })
                .toString();
            this.location.go(newRoute);
        });
    }

    // Go to given page by api id
    private goToPageId(pageId: number) {
        let idx = this.pages.indexOf(pageId);
        return this.goToPage(idx > -1 ? idx : 0);
    }


    /* Project details
       ====================================================== */
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


    /* Other  helper functions
       ====================================================== */

    // Get a WorkGridPage from API
    private retrievePageFromApi(pageIdx: number): Observable<WorkGridPage> {
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

}
