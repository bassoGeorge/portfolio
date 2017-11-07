///////////////////////////////////////////////////////////////////////////////
//                            The core app module                            //
///////////////////////////////////////////////////////////////////////////////

import { NgModule } from '@angular/core';

import { HomePage } from './pages/home/home.page';
import { AboutMePage } from './pages/about-me/about-me.page';

@NgModule({
    declarations: [
        HomePage,
        AboutMePage
    ]
})
export class CoreModule { }
