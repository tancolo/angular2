import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import '../../node_modules/moment/moment.js'
import '../../node_modules/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js';

@Component({
    selector: 'my-app',
    templateUrl: './app.bootstrap-picker.component.html'
})

export class AppBootstrapPickerComponent implements OnInit {
    private dateSelected: string;
    private datepickerElement;
    constructor(){
    }
    ngOnInit(): void {
        this.datepickerElement = $('#datetimepicker1');
        this.datepickerElement.datetimepicker({
            locale: 'en'
        });
        this.datepickerElement.on('dp.change', e => {
            console.log('e.date: ', e.date);
            this.dateSelected = e.date.toString();
            //this.dateSelected = e.date.valueOf();
        });
    }
}