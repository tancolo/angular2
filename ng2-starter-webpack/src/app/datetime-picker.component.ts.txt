import { Component, OnInit, EventEmitter, Output,Input, AfterViewChecked } from '@angular/core';
import * as $ from 'jquery';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import '../../node_modules/moment/moment.js'
import '../../node_modules/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js';

@Component({
    selector: 'ng2-datetimepicker',
    templateUrl: './datetime-picker.component.html'
})
export class DateTimePickerComponent implements OnInit, AfterViewChecked {
    private dateTime:string;
    private datetimepickerElement;
    @Input() ID: string;
    @Output() dateSelected:EventEmitter<string> = new EventEmitter();

    constructor() {
        console.log('ID: ', this.ID);
    }

    ngAfterViewChecked():void {
        console.log('ngAfterViewChecked: ');
        this.datetimepickerElement = $('#' + this.ID );
        this.datetimepickerElement.datetimepicker({
            locale: 'en'
        });
        this.datetimepickerElement.on('dp.change', e => {
            //console.log('onChange: ', e.date);
            this.dateTime = e.date;
            this.dateSelected.emit(this.dateTime);
        });
    }

    ngOnInit():void {
        console.log('ngOnInit: ');
        //this.datetimepickerElement = $('#datetimepicker1');
        //this.datetimepickerElement.datetimepicker({
        //    locale: 'en'
        //});
        //this.datetimepickerElement.on('dp.change', e => {
        //    //console.log('onChange: ', e.date);
        //    this.dateTime = e.date;
        //    this.dateSelected.emit(this.dateTime);
        //});
    }
}