///////////////////////////////////////////////////////////////////////////////
//                        Work service to get API data                       //
///////////////////////////////////////////////////////////////////////////////

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import * as _ from 'underscore';

import { Project } from './models';

@Injectable()
export class WorkService {

    constructor(
        private http: HttpClient
    ){}

    getPages() {
        return this.http.get("/api/tables/work_pages/rows", {
            params: new HttpParams()
                .set('depth', '0')
                .set('columns', 'id')
        }).map(json => json["data"]);
    }

    getProjectsForPage(num: number) {
        return this.http.get("/api/tables/projects/rows", {
            params: new HttpParams()
                .set('depth', '1')
                .set('columns', [
                    'id', 'status', 'name', 'type',
                    'summary', 'weight',
                    'skills.name'
                ].join(','))
                .set('filters[page_id][eq]', '' + num)
        })
            .map(json => json["data"])
            .mergeMap(items => Observable.from(items)) // Create observable from array and then flatten this
            .map(project => {
                let techs = _.pluck(project["skills"]["data"], 'name');
                return new Project(
                    parseInt(project['id']),
                    project['name'],
                    project['summary'],
                    techs,
                    project["type"],
                    project["weight"]
                );
            })
        ;
    }

    getProjectDetails(project: Project) {
        return this.http.get("/api/tables/projects/rows/"+project.id, {
            params: new HttpParams()
                .set('depth', '0')
                .set('columns', 'description')
        })
            .map(json => json["data"]['description'])
    }
}
