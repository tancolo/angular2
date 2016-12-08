import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { NgbModule, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import {AppNgBootstrapComponent} from './ng-bootstrap/app.ngbootstrap.component';
import {I18n} from "./ng-bootstrap/custom.datepickerI18n";
import {CustomDatepickerI18n} from "./ng-bootstrap/custom.datepickerI18n";

@NgModule({
    imports:        [BrowserModule, FormsModule, NgbModule.forRoot()],
    declarations:   [AppNgBootstrapComponent],
    bootstrap:      [AppNgBootstrapComponent],
    providers: [
        I18n,
        {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}
    ]
})
export class AppModule{}