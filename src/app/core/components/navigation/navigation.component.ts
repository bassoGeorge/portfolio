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
    public images = {
        home: require('./code.svg'),
    }
}
