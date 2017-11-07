import { Routes } from '@angular/router';

import { HomePage } from './pages/home/home.page';
import { AboutMePage } from './pages/about-me/about-me.page';

// Some auxilary style imports
import '../../assets/css/normalize.css';
import '../../assets/css/site.styl';


export const coreRoutes: Routes = [
    { path: '', component: HomePage },
    { path: 'about-me', component: AboutMePage },
];
