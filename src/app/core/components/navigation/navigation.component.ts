///////////////////////////////////////////////////////////////////////////////
//          The main navigation component at the bottom of the page          //
///////////////////////////////////////////////////////////////////////////////
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface NavInfo {
    id: string;
    name: string;
    img: SafeHtml;
    target: string;
}

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.styl']
})
export class NavigationComponent {
    constructor(
        private router: Router,
        private ds: DomSanitizer
    ) {}

    buildNav(id: string, name: string, target: string, img: string): NavInfo {
        return {
            id: id,
            name: name,
            img: this.ds.bypassSecurityTrustHtml(img),
            target: target
        }
    }

    pages: NavInfo[] = [
        this.buildNav('home', "Home", "/home", require('./assets/home.svg')),
        this.buildNav('about', "About Me", "/about-me", require('./assets/about.svg')),
        this.buildNav('my-work', "My Work", "/my-work", require('./assets/work.svg')),
        this.buildNav('skills', "Skills", "/skills", require('./assets/skills.svg')),
        this.buildNav('contact-me', "Contact Me", "/contact-me", require('./assets/contact.svg')),
    ]

    quickLinks: NavInfo[] = [
        this.buildNav('github', "GitHub", 'https://github.com/bassoGeorge', require('./assets/github.svg')),
        this.buildNav('resume', "Resume", '#', require('./assets/resume.svg'))
    ];
}
