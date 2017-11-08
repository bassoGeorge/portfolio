import { Routes } from '@angular/router';

import { HomePage } from './pages/home/home.page';
import { AboutMePage } from './pages/about-me/about-me.page';

export const coreRoutes: Routes = [
    { path: 'home', component: HomePage },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'about-me', component: AboutMePage },
];
