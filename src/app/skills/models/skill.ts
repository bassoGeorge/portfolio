///////////////////////////////////////////////////////////////////////////////
//                         A single place-able skill                         //
///////////////////////////////////////////////////////////////////////////////
import { Point } from '.';
import * as _ from 'underscore';

export class Skill {

    constructor(
        public id: number,
        public name: string,
        public rating: number
    ){
        if (this.rating < 0 || this.rating > 5) {
            console.error(`Rating ${this.rating} out of range [0, 5] for Skill ${this.name}`);
            this.rating = 3;
        }
    }


    // public mobilePoint:  Point;
    // public tabletPoint:  Point;
    // public desktopPoint: Point;
    private placement: {[k: string]: Point} = {}

    // Because its mobile first, we try to find point matching and then
    // go forward and check for next lower/less-specific item
    private bpList = ['desktop', 'tablet', 'mobile'];

    private getPlacement(pType: string): Point {
        let startIdx = _.max([this.bpList.indexOf(pType), 0]);
        let key = _.chain(this.bpList)
            .rest(startIdx)
            .find( ( t: string ) => Boolean(this.placement[t]) )
            .value()

        return this.placement[key];
    }

    get mobilePlacement(): Point {
        return this.getPlacement('mobile')
    }
    set mobilePlacement(value: Point) {
        this.placement['mobile'] = value;
    }

    get tabletPlacement(): Point {
        return this.getPlacement('tablet')
    }
    set tabletPlacement(value: Point) {
        this.placement['tablet'] = value;
    }

    get desktopPlacement(): Point {
        return this.getPlacement('desktop')
    }
    set desktopPlacement(value: Point) {
        this.placement['desktop'] = value;
    }
}
