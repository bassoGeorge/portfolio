import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { CoreModule } from './core';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
    { path: 'skills', loadChildren: './skills#SkillsModule' },
    { path: '', loadChildren: () => CoreModule },
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false } // only for debugging purposes
        ),
        BrowserModule,
        CoreModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
