import { Component } from '@angular/core';
import { Skill, Point } from '../models';
import { SkillsService } from '../skills.service';

@Component({
    selector: 'skills-page',
    templateUrl: './skills.page.html',
    styleUrls: ['./skills.page.styl']
})
export class SkillsPage {

    constructor(
        private skillsService: SkillsService
    ){}

    testSkill: Skill;
    skills: Skill[];

    ngOnInit() {
        this.testSkill = new Skill(1, "Angular", 3);
        this.testSkill.mobilePlacement = {x: 50, y: 10}

        this.skillsService.skills
            .reduce((acc, skill) => {
                acc.push(skill);
                return acc
            }, [])
            .subscribe(skills => {
                this.skills = skills;
            })
    }
}
