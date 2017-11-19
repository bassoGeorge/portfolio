///////////////////////////////////////////////////////////////////////////////
//        Fancy particles to be used on the background (particles.js)        //
///////////////////////////////////////////////////////////////////////////////
import { Component } from '@angular/core';
import 'particles.js/particles.js';

declare global {
    interface Window { particlesJS: any }
}

@Component({
    selector: 'particles',
    template: `<div id="particles-js"></div>`,
    // styleUrls: ['./particles.component.styl']
    styles: [`
        #particles-js {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
        }
    `]
})
export class ParticlesComponent {
    ngOnInit() {
        window.particlesJS.load('particles-js', require('!file-loader!./config.json'), function() {
            console.log('callback - particles.js config loaded');
        });
    }
}
