///////////////////////////////////////////////////////////////////////////////
//                                Work module                                //
///////////////////////////////////////////////////////////////////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MarkdownModule } from 'angular2-markdown';

import { MyWorkPage } from './pages/my-work.page'

import {
    ProjectCard,
    ProjectDetails,
    WorkGridPaginator,
    WorkGrid
} from './components';
import { WorkService } from './work.service';

const workRoutes: Routes = [
    { path: '', component: MyWorkPage }
];

@NgModule({
    imports: [
        RouterModule.forChild(workRoutes),
        MarkdownModule.forRoot(),
        CommonModule
    ],
    declarations: [
        MyWorkPage,
        ProjectCard,
        ProjectDetails,
        WorkGrid,
        WorkGridPaginator
    ],
    providers: [
        WorkService
    ],
    exports: [
        MyWorkPage
    ]
})
export class WorkModule {}
