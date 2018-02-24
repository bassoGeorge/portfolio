///////////////////////////////////////////////////////////////////////////////
//       The  skills module contains the skills page and related logic       //
///////////////////////////////////////////////////////////////////////////////
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkillsPage } from './pages/skills.page';
import {
    SkillBubbleComponent
} from './components';

const skillsRoutes: Routes = [
    { path: '', component: SkillsPage }
];

@NgModule({
    imports: [
        RouterModule.forChild(skillsRoutes)
    ],
    declarations: [
        SkillBubbleComponent,
        SkillsPage
    ]
})
export class SkillsModule { }
