import {Component, ViewChild, ElementRef, OnInit, AfterViewInit} from '@angular/core';
declare var jQuery:any;

@Component({
    selector: 'my-app',
    template: `
    <h4>所选日期:</h4>
    <input type="text" id="datetimepicker1" value="test">
    `
})

export class AppComponent {
    ngAfterViewInit():void {
        console.log('debug:11 ', jQuery('#datetimepicker1').val());
    }
    ngOnInit():void {
        console.log('debug: ', jQuery('#datetimepicker1').val('hello world!'));
        jQuery('#datetimepicker1').datetimepicker();
    }
}