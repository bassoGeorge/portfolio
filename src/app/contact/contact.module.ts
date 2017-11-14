///////////////////////////////////////////////////////////////////////////////
//                               Contact module                              //
///////////////////////////////////////////////////////////////////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactMePage } from './pages/contact-me.page'

const contactRoutes: Routes = [
    { path: '', component: ContactMePage }
];

@NgModule({
    imports: [
        RouterModule.forChild(contactRoutes),
        ReactiveFormsModule,
        CommonModule
    ],
    declarations: [
        ContactMePage
    ],
    exports: [
        ContactMePage
    ]
})
export class ContactModule {}
