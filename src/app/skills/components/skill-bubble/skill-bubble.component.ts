///////////////////////////////////////////////////////////////////////////////
//                           A simple skill bubble                           //
///////////////////////////////////////////////////////////////////////////////
import {
    Component,
    Input,
    HostBinding,
    ElementRef
} from '@angular/core';
import { Skill, Point } from '../../models';
import * as _ from 'underscore';


@Component({
    selector: 'skill-bubble',
    templateUrl: './skill-bubble.component.html',
    styleUrls: [ './skill-bubble.component.styl' ]
})
export class SkillBubbleComponent {
    @Input() skill: Skill;

    @HostBinding('style.left') leftPos: string;
    @HostBinding('style.top') topPos: string;

    arrowClasses: string

    constructor(private elem: ElementRef){}

    ngOnInit() {}

    ngAfterViewInit(){
        this.setPosition(this.skill.mobilePlacement); // Throws a stupid error, ignore
        this.computeArrowDirection(this.skill.mobilePlacement);
    }

    private setPosition(target: Point) {
        let ourWidth = this.elem.nativeElement.clientWidth;
        let ourHeight = this.elem.nativeElement.clientHeight;
        this.leftPos = `calc(${target.x}% - ${ourWidth / 2}px)`;
        this.topPos = `calc(${target.y}% - ${ourHeight / 2}px)`;
    }

    private leftRightMap: any = [{
        limit: 50,
        add: 'right'
    }, {
        limit: 100,
        add: 'left'
    }];

    private arrowDirectionMap: any = [{
        limit: 40,
        add: 'down',
        x: [{
            limit: 40,
            add: 'down-right'
        }, {
            limit: 60,
            add: 'center'
        }, {
            limit: 100,
            add: 'down-left'
        }]
    }, {
        limit: 60,
        add: 'bottom',
        x: this.leftRightMap
    }, {
        limit: 80,
        add: 'center',
        x: this.leftRightMap
    }, {
        limit: 100,
        add: 'top',
        x: this.leftRightMap
    }]

    private computeArrowDirection(target: Point) {
        let yObject = _.find(
            this.arrowDirectionMap,
            (item: any) => item.limit >= target.y
        );
        let xObject = _.find(
            yObject.x,
            (item: any) => item.limit >= target.x
        );

        this.arrowClasses = yObject.add + ' ' + xObject.add;
    }
}
