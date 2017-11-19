///////////////////////////////////////////////////////////////////////////////
//          The main navigation component at the bottom of the page          //
///////////////////////////////////////////////////////////////////////////////
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface PageInfo {
    id: string;
    name: string;
    img: string;
    imgActive: string;
    target: string;
}

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.styl']
})
export class NavigationComponent {
    constructor(private router: Router) {}

    public pages: PageInfo[] = [{
        id: 'home',
        name: "Home",
        img: require('./assets/home_grey.svg'),
        imgActive: require('./assets/home_green.svg'),
        target: "/home"
    }, {
        id: 'about',
        name: "About Me",
        img: require('./assets/about_grey.svg'),
        imgActive: require('./assets/about_green.svg'),
        target: "/about-me"
    }, {
        id: 'my-work',
        name: "My Work",
        img: require('./assets/work_grey.svg'),
        imgActive: require('./assets/work_green.svg'),
        target: "/my-work"
    }, {
        id: 'skills',
        name: "Skills",
        img: require('./assets/skills_grey.svg'),
        imgActive: require('./assets/skills_green.svg'),
        target: "/skills"
    }, {
        id: 'contact-me',
        name: "Contact Me",
        img: require('./assets/contact_grey.svg'),
        imgActive: require('./assets/contact_green.svg'),
        target: "/contact-me"
    }];

    getPageIcon(page: PageInfo) {
        return this.router.isActive(page.target, false) ? page.imgActive : page.img;
    }
}
