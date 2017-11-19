///////////////////////////////////////////////////////////////////////////////
//          The main navigation component at the bottom of the page          //
///////////////////////////////////////////////////////////////////////////////
import { Component } from '@angular/core';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.styl']
})
export class NavigationComponent {
    public pages = [{
        id: 'home',
        name: "Home",
        img: require('./code.svg'),
        target: "/home"
    }, {
        id: 'about',
        name: "About Me",
        img: require('./code.svg'),
        target: "/about-me"
    }, {
        id: 'my-work',
        name: "My Work",
        img: require('./code.svg'),
        target: "/my-work"
    }, {
        id: 'skills',
        name: "Skills",
        img: require('./code.svg'),
        target: "/skills"
    }, {
        id: 'contact-me',
        name: "Contact Me",
        img: require('./code.svg'),
        target: "/contact-me"
    }];
}
