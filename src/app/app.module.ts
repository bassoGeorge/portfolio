import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { CoreModule } from './core/core.module';
import { SkillsModule } from './skills/skills.module';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
    { path: 'skills', loadChildren: () => SkillsModule },
    { path: '', loadChildren: () => CoreModule },
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // only for debugging purposes
        ),
        BrowserModule,
        CoreModule,
        SkillsModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
