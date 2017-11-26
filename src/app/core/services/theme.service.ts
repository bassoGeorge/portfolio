///////////////////////////////////////////////////////////////////////////////
//                            The theming service                            //
///////////////////////////////////////////////////////////////////////////////

import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {
    private themes = {};
    private currentTheme = 'dark';

    constructor() {
        let link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("id", "theme-link");

        document.head.appendChild(link);

        this.themes = Object.assign({}, window.BuildData.themes);
    }

    setTheme(theme: string) {
        this.currentTheme = theme;
        var src = this.themes[theme];
        document.getElementById("theme-link").setAttribute("href", src);
    }

    switchTheme() {
        this.setTheme(this.currentTheme == 'dark' ? 'light' : 'dark');
    }
}
