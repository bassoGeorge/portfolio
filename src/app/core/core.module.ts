///////////////////////////////////////////////////////////////////////////////
//                            The core app module                            //
///////////////////////////////////////////////////////////////////////////////

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomePage } from './pages/home/home.page';
import { AboutMePage } from './pages/about-me/about-me.page';
import { coreRoutes } from './core.routes';
import { ThemeService } from './theme.service';

import { NavigationComponent, ThemeSwitcherComponent } from './components';

// Some auxilary style imports
import '../../assets/css/normalize.css';
import '../../assets/css/site.styl';


declare global {
    interface Window { BuildData: any; }
}

@NgModule({
    imports: [ RouterModule.forChild(coreRoutes) ],
    declarations: [
        HomePage,
        AboutMePage,
        NavigationComponent,
        ThemeSwitcherComponent
    ],
    providers: [
        ThemeService
    ],
    exports: [
        NavigationComponent,
        ThemeSwitcherComponent
    ]
})
export class CoreModule { }
