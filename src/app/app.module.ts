import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomePage } from './shared/pages/home/home.page';
import { AboutMePage } from './shared/pages/about-me/about-me.page';

const appRoutes: Routes = [
    { path: '', component: HomePage },
    { path: 'about-me', component: AboutMePage },
    { path: '**', redirectTo: '' }
]

// Some auxilary style imports
import '../assets/css/normalize.css';
import '../assets/css/site.styl';

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // only for debugging purposes
        ),
        BrowserModule,
        SharedModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
