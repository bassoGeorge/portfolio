import { Routes } from '@angular/router';

import { HomePage } from './pages/home/home.page';
import { AboutMePage } from './pages/about-me/about-me.page';

export const coreRoutes: Routes = [
    { path: '', component: HomePage },
    { path: 'about-me', component: AboutMePage },
];
