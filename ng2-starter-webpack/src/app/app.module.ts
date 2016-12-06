import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppBootstrapPickerComponent} from './app.bootstrap-picker.component';
import {DateTimePickerComponent} from "./datetime-picker.component";

@NgModule({
    imports:        [BrowserModule, FormsModule],
    declarations:   [AppBootstrapPickerComponent, DateTimePickerComponent],
    bootstrap:      [AppBootstrapPickerComponent]
})
export class AppModule{}