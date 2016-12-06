import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppBootstrapPickerComponent} from './app.bootstrap-picker.component';

@NgModule({
    imports:        [BrowserModule],
    declarations:   [AppBootstrapPickerComponent],
    bootstrap:      [AppBootstrapPickerComponent]
})
export class AppModule{}