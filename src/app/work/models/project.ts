///////////////////////////////////////////////////////////////////////////////
//                        The core Project Model class                       //
///////////////////////////////////////////////////////////////////////////////
import * as _ from 'underscore';

export class Project {
    // TODO: change techs to take {id, name} as we might need to filter based off that later
    constructor(
        public id: number,
        public title: string,                   // The title
        public shortDescription: string,        // A short description of the projecct
        public tech: string[],                  // The list of technologies used, descending order of importance
        public type: string = 'work',
        public weight: number = 5
    ){}

    fullDescription: string;         // The complete description, TODO: make it markdown
                                     // or html

    getShortTechs (){
        return _.chain(this.tech)
            .first(3)
            .reduce((acc, item) => acc + ' + ' + item)
            .value()
    }
}
