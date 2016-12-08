import {Component} from '@angular/core';
import {I18n} from "./custom.datepickerI18n";
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'ngbs-app',
    templateUrl: './app.ngbootstrap.component.html'
})

export class AppNgBootstrapComponent {
    model;
    date: NgbDateStruct;

    constructor(private _i18n: I18n) {
        this.date = {year: 2015, month: 12, day: 8};
    }

    set language(lang: string){
        this._i18n.language = lang;
    }

    get language(){
        return this._i18n.language;
    }

}