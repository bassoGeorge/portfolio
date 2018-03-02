///////////////////////////////////////////////////////////////////////////////
//       The  skills module contains the skills page and related logic       //
///////////////////////////////////////////////////////////////////////////////
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SkillsPage } from './pages/skills.page';
import { SkillsService } from './skills.service';
import {
    SkillBubbleComponent
} from './components';

const skillsRoutes: Routes = [
    { path: '', component: SkillsPage }
];

@NgModule({
    imports: [
        RouterModule.forChild(skillsRoutes),
        CommonModule
    ],
    declarations: [
        SkillBubbleComponent,
        SkillsPage
    ],
    providers: [
        SkillsService
    ]
})
export class SkillsModule { }
