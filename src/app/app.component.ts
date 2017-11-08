///////////////////////////////////////////////////////////////////////////////
//              The main component to get this show on the road              //
///////////////////////////////////////////////////////////////////////////////
import { Component, ElementRef } from '@angular/core';

import { ThemeService } from './core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(
        private themeService: ThemeService
    ) {
    }

    ngOnInit() {
        this.themeService.setTheme('dark');
    }
}
