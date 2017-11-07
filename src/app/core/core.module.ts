///////////////////////////////////////////////////////////////////////////////
//                            The core app module                            //
///////////////////////////////////////////////////////////////////////////////

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomePage } from './pages/home/home.page';
import { AboutMePage } from './pages/about-me/about-me.page';
import { coreRoutes } from './core.routes';

@NgModule({
    imports: [ RouterModule.forChild(coreRoutes) ],
    declarations: [
        HomePage,
        AboutMePage
    ]
})
export class CoreModule { }
