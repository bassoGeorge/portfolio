///////////////////////////////////////////////////////////////////////////////
//                                Work module                                //
///////////////////////////////////////////////////////////////////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MyWorkPage } from './pages/my-work.page'

import { ProjectCard, ProjectDetails, GridNavigation } from './components';
import { WorkService } from './work.service';

const workRoutes: Routes = [
    { path: '', component: MyWorkPage }
];

@NgModule({
    imports: [
        RouterModule.forChild(workRoutes),
        CommonModule
    ],
    declarations: [
        MyWorkPage,
        ProjectCard,
        ProjectDetails,
        GridNavigation
    ],
    providers: [
        WorkService
    ],
    exports: [
        MyWorkPage
    ]
})
export class WorkModule {}
