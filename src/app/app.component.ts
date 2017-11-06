import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl']
})
export class AppComponent {
    private theme = 'dark';

    private darkTheme = '';
    private lightTheme = '';

    constructor(elm: ElementRef) {
        this.darkTheme = elm.nativeElement.getAttribute("dark-theme");
        this.lightTheme = elm.nativeElement.getAttribute("light-theme");
    }

    ngOnInit() {
        this.setTheme('dark');
    }

    setTheme(theme: string) {
        this.theme = theme;
        var src = theme == 'dark' ? this.darkTheme : this.lightTheme;
        document.getElementById("theme-link").setAttribute("href", src);
    }

    switchTheme() {
        var nt = this.theme == 'dark' ? 'light' : 'dark';
        this.setTheme(nt);
    }
}
