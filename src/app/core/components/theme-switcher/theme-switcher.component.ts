///////////////////////////////////////////////////////////////////////////////
//                      A simple theme switching button                      //
///////////////////////////////////////////////////////////////////////////////
import { Component } from '@angular/core';

import { ThemeService } from '../../services';

@Component({
    selector: 'theme-switcher',
    template: `<button (click)=switch()>Switch Theme</button>`
})
export class ThemeSwitcherComponent {
    constructor(private themeService: ThemeService) {}
    switch() { this.themeService.switchTheme(); }
}
