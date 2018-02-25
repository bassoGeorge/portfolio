///////////////////////////////////////////////////////////////////////////////
//                           A simple skill bubble                            //
///////////////////////////////////////////////////////////////////////////////
import {
    Component,
    Input,
    HostBinding,
    ElementRef
} from '@angular/core';
import { Skill, Point } from '../../models';

@Component({
    selector: 'skill-bubble',
    templateUrl: './skill-bubble.component.html',
    styleUrls: [ './skill-bubble.component.styl' ]
})
export class SkillBubbleComponent {
    @Input() skill: Skill;
    @HostBinding('style.left') leftPos: string;
    @HostBinding('style.top') topPos: string;

    constructor(private elem: ElementRef){}

    ngOnInit() {}

    ngAfterViewInit(){
        this.setPosition(this.skill.mobilePlacement); // Throws a stupid error, ignore
    }

    private setPosition(target: Point) {
        let ourWidth = this.elem.nativeElement.clientWidth;
        let ourHeight = this.elem.nativeElement.clientHeight;
        this.leftPos = `calc(${target.x}% - ${ourWidth / 2}px)`;
        this.topPos = `calc(${target.y}% - ${ourHeight / 2}px)`;
    }
}
