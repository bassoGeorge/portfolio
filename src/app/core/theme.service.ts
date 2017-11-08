///////////////////////////////////////////////////////////////////////////////
//                            The theming service                            //
///////////////////////////////////////////////////////////////////////////////

import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {
    private themes = {};
    private currentTheme = 'dark';

    constructor() {
        this.themes = Object.assign({}, window.BuildData.themes);
    }

    setTheme(theme: string) {
        this.currentTheme = theme;
        var src = this.themes[theme];
        document.getElementById("theme-link").setAttribute("href", src);
    }
}
