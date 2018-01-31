///////////////////////////////////////////////////////////////////////////////
//                     Application configuration service                     //
///////////////////////////////////////////////////////////////////////////////

import { Injectable } from '@angular/core';
import * as _ from 'underscore';

@Injectable()
export class ConfigService {
    private config = {};

    constructor() {
        this.loadAll();
    }

    loadAll() {
        // Since we are using webpack, the configuration path should be
        // explicit everytime or else we won't be able to load the json
        this.config = _.extend(
            this.config,
            {},
            // require("../../../config/projects.json")            // Add additional configuration jsons
        )
    }

    getConfig(key:string) {
        return this.config[key] || {};
    }
}
