import {Component, ViewChild, ElementRef, OnInit, AfterViewInit} from '@angular/core';
import * as $ from 'jquery';
import '../../node_modules/jquery-mousewheel/jquery.mousewheel.js';
import '../../node_modules/jquery-datetimepicker/build/jquery.datetimepicker.full.js';

//declare var $:any;

@Component({
    selector: 'my-app',
    template: `
    <h4>所选日期:</h4>
    <input type="text" id="datetimepicker1" value="test">
    `
})

export class AppComponent implements AfterViewInit, OnInit {
    ngAfterViewInit():void {
        console.log('debug:11 ', $('#datetimepicker1').val());
    }
    ngOnInit():void {
        console.log('debug: ', $('#datetimepicker1').val('hello world!'));
        $.datetimepicker.setLocale('ch');
        $('#datetimepicker1').datetimepicker();
    }
}