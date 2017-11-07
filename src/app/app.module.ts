import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { CoreModule } from './core/core.module';
import { SkillsModule } from './skills/skills.module';

import { AppComponent } from './app.component';
import { HomePage } from './core/pages/home/home.page';
import { AboutMePage } from './core/pages/about-me/about-me.page';

const appRoutes: Routes = [
    { path: '', component: HomePage },
    { path: 'about-me', component: AboutMePage },
    { path: 'skills', loadChildren: () => SkillsModule },
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
        SkillsModule,
        CoreModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
