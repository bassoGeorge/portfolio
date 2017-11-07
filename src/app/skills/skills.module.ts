///////////////////////////////////////////////////////////////////////////////
//       The  skills module contains the skills page and related logic       //
///////////////////////////////////////////////////////////////////////////////
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkillsPage } from './pages/skills.page';

const skillsRoutes: Routes = [
    { path: '', component: SkillsPage }
];

@NgModule({
    imports: [
        RouterModule.forChild(skillsRoutes)
    ],
    declarations: [
        SkillsPage
    ]
})
export class SkillsModule { }
