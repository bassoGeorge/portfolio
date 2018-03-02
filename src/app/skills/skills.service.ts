///////////////////////////////////////////////////////////////////////////////
//                       Skills service to get API data                      //
///////////////////////////////////////////////////////////////////////////////
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { Skill } from './models';

@Injectable()
export class SkillsService {

    constructor(
        private http: HttpClient
    ){}

    // NOTE: this is an observable. the http.get will not be called unless subscribed
    skills: Observable<Skill> = this.http.get(
        "/api/tables/skills/rows", {
            params: new HttpParams()
                .set('depth', '1')
                .set('filters[featured][eq]', '1')
        })
        .map(json => json['data'])
        .mergeMap(items => Observable.from(items))
        .map(rawSkill => {
            let skill = new Skill(
                parseInt(rawSkill['id']),
                rawSkill['name'],
                rawSkill['rating']
            );

            skill.mobilePlacement = {
                x: rawSkill['pos-mobile-x'],
                y: rawSkill['pos-mobile-y']
            };
            return skill
        });
}
