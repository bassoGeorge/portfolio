///////////////////////////////////////////////////////////////////////////////
//          The main navigation component at the bottom of the page          //
///////////////////////////////////////////////////////////////////////////////
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface PageInfo {
    id: string;
    name: string;
    img: SafeHtml;
    imgActive: string;
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

    public pages: PageInfo[] = [{
        id: 'home',
        name: "Home",
        img: this.ds.bypassSecurityTrustHtml(require('!svg-inline-loader!./assets/home_grey.svg')),
        imgActive: require('./assets/home_green.svg'),
        target: "/home"
    }, {
        id: 'about',
        name: "About Me",
        img: this.ds.bypassSecurityTrustHtml(require('!svg-inline-loader!./assets/about_grey.svg')),
        imgActive: require('./assets/about_green.svg'),
        target: "/about-me"
    }, {
        id: 'my-work',
        name: "My Work",
        img: this.ds.bypassSecurityTrustHtml(require('!svg-inline-loader!./assets/work_grey.svg')),
        imgActive: require('./assets/work_green.svg'),
        target: "/my-work"
    }, {
        id: 'skills',
        name: "Skills",
        img: this.ds.bypassSecurityTrustHtml(require('!svg-inline-loader!./assets/skills_grey.svg')),
        imgActive: require('./assets/skills_green.svg'),
        target: "/skills"
    }, {
        id: 'contact-me',
        name: "Contact Me",
        img: this.ds.bypassSecurityTrustHtml(require('!svg-inline-loader!./assets/contact_grey.svg')),
        imgActive: require('./assets/contact_green.svg'),
        target: "/contact-me"
    }];

    public quickLinks = [{
        name: "GitHub",
        img: require('./assets/github.svg'),
        target: '#'
    },{
        name: "Resume",
        img: require('./assets/resume.svg'),
        target: '#'
    }];

    getPageIcon(page: PageInfo) {
        return this.router.isActive(page.target, false) ? page.imgActive : page.img;
    }

}
