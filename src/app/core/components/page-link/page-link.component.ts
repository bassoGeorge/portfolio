///////////////////////////////////////////////////////////////////////////////
//        The single page link on the navigation with cool animations        //
///////////////////////////////////////////////////////////////////////////////
import { Component, Input } from '@angular/core';

@Component({
    selector: 'page-link',
    templateUrl: './page-link.component.html',
    styleUrls: [ './page-link.component.styl' ]
})
export class PageLinkComponent {
    @Input() target: string;
    @Input() name: string;
    @Input() img: string;
}
