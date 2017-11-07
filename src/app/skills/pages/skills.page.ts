import { Component } from '@angular/core';

@Component({
    selector: 'skills',
    template: `<h1>{{ title }}</h1>`
})
export class SkillsPage {
    title = "Skills page";

    ngOnInit() {
        console.log("Skills loaded !!");
    }
}
