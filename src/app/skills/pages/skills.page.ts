import { Component } from '@angular/core';
import { Skill, Point } from '../models';

@Component({
    selector: 'skills-page',
    templateUrl: './skills.page.html',
    styleUrls: ['./skills.page.styl']
})
export class SkillsPage {

    public testSkill: Skill;
    ngOnInit() {
        this.testSkill = new Skill(1, "Angular", 3);
        this.testSkill.mobilePlacement = {x: 50, y: 10}
    }
}
