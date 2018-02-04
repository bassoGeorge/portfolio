///////////////////////////////////////////////////////////////////////////////
//                            The core app module                            //
///////////////////////////////////////////////////////////////////////////////

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePage } from './pages/home/home.page';
import { AboutMePage } from './pages/about-me/about-me.page';
import { coreRoutes } from './core.routes';
import { ThemeService, ConfigService } from './services';
import { CoreHttpInterceptors } from './interceptors';

import {
    NavigationComponent,
    ThemeSwitcherComponent,
    ParticlesComponent
} from './components';

// Some auxilary style imports
import 'animate.css/animate.css';
import '../../assets/css/normalize.css';
import '../../assets/css/site.styl';


declare global {
    interface Window { BuildData: any; }
}

@NgModule({
    imports: [
        RouterModule.forChild(coreRoutes),
        CommonModule
    ],
    declarations: [
        HomePage,
        AboutMePage,
        NavigationComponent,
        ThemeSwitcherComponent,
        ParticlesComponent
    ],
    providers: [
        ThemeService,
        ConfigService,
        ...CoreHttpInterceptors
    ],
    exports: [
        NavigationComponent,
        ThemeSwitcherComponent,
        ParticlesComponent
    ]
})
export class CoreModule { }
