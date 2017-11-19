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
        name: "Home",
        img: require('./code.svg'),
        target: "/home"
    }, {
        name: "About Me",
        img: require('./code.svg'),
        target: "/about-me"
    // }, {
    //     name: "My Work",
    //     img: require('./code.svg'),
    //     target: "/home"
    }, {
        name: "Skills",
        img: require('./code.svg'),
        target: "/skills"
    }, {
        name: "Contact Me",
        img: require('./code.svg'),
        target: "/contact-me"
    }];
}
