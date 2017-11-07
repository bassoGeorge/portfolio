import { Component } from '@angular/core';

@Component({
    selector: 'home',
    template: `<h1>{{ title }}</h1>`
})
export class HomePage {
    title = "Home Page";
}
