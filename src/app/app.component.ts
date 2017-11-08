import { Component, ElementRef } from '@angular/core';

import { ThemeService } from './core/theme.service';

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
