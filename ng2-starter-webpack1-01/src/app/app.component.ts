import {Component} from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//     <h1>Hello World!</h1> 
//     <p>欢迎来到@tancolo github</p>
//     `,
//     styles: [`
//         h1 {color: red;}
//         p  {font-size: 200%;}
//     `]
// })

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(){
        console.log('AppComponent constructor');
    }
}