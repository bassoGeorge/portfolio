///////////////////////////////////////////////////////////////////////////////
//                        The main page for Contact Me                       //
///////////////////////////////////////////////////////////////////////////////
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'contact-me-page',
    templateUrl: './contact-me.page.html'
})
export class ContactMePage {
    contactForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    createForm(){
        this.contactForm = this.fb.group({
            name: ['', [Validators.required] ],
            email: ['', [Validators.email]],
            subject: ['', []],
            message: ['', [Validators.required]]
        })
    }

}
