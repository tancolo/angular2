import {Component, ViewChild, ElementRef, OnInit, AfterViewInit} from '@angular/core';
declare var $: any;

@Component({
    selector: 'my-app',
    template: `<select #selectElem>
        <option *ngFor="let item of items" [value]="item" [selected]="item === selectedValue">{{item}} option</option>
        </select>
        <h4> {{selectedValue}}</h4>`
})

export class AppComponent implements AfterViewInit{
    @ViewChild('selectElem') el:ElementRef;
    items = ['First', 'Second', 'Third'];
    selectedValue = 'Second';

    ngAfterViewInit(): void {
        $(this.el.nativeElement)
            .chosen()
            .on('change', (e, args) => {
                this.selectedValue = args.selected;
                console.log('selectedValue: ', this.selectedValue);
            });
    }
}