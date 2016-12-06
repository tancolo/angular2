import {Component, ViewChild, ElementRef, OnInit, AfterViewInit} from '@angular/core';
import * as $ from 'jquery';
//import '../../node_modules/jquery-datetimepicker/build/jquery.datetimepicker.full.js';

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
        const currentDateTime = new Date();
        console.log('debug: ', $('#datetimepicker1').val('hello'));
        //$.datetimepicker.setLocale('ch');
        //$('#datetimepicker1').datetimepicker({
        //    onChangeDateTime: function(dp, $input){
        //        console.log('date-Time: ', $input.val());
        //    }
        //});
    }
}