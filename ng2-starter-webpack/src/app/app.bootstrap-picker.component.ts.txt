import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.bootstrap-picker.component.html'
})

export class AppBootstrapPickerComponent {
    private datetime: string;

    showDateTime(datetime){
        console.log('datetime: ', datetime);
        this.datetime = datetime;
        //this.datetime = datetime.valueOf();

    }
}