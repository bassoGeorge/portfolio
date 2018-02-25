///////////////////////////////////////////////////////////////////////////////
//                           A simple skill bubble                            //
///////////////////////////////////////////////////////////////////////////////
import { Component, Input } from '@angular/core';
import { Skill } from '../../models';

@Component({
    selector: 'skill-bubble',
    templateUrl: './skill-bubble.component.html',
    styleUrls: [ './skill-bubble.component.styl' ]
})
export class SkillBubbleComponent {
    @Input() skill: Skill;

    ngOnInit() {
        // console.log(this.skill.mobilePlacement.x);
        // console.log(this.skill.desktopPlacement.y);
    }
}
