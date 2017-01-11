import './rxjs-extensions'

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {HeroService} from "./hero.service";

import {AppRoutingModule} from './app.routing.module';

import {HeroSearchComponent} from "./hero-search.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent
    ],
    bootstrap: [AppComponent],
    providers: [HeroService]
})

export class AppModule {
}