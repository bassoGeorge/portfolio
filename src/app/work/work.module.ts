///////////////////////////////////////////////////////////////////////////////
//                                Work module                                //
///////////////////////////////////////////////////////////////////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MyWorkPage } from './pages/my-work.page'

const workRoutes: Routes = [
    { path: '', component: MyWorkPage }
];

@NgModule({
    imports: [
        RouterModule.forChild(workRoutes),
        CommonModule
    ],
    declarations: [
        MyWorkPage
    ],
    exports: [
        MyWorkPage
    ]
})
export class WorkModule {}
