import { Component } from '@angular/core';

@Component({
    selector: 'home-page',
    template: `<h1>{{ title }}</h1>`
})
export class HomePage {
    title = "Home Page";
}
