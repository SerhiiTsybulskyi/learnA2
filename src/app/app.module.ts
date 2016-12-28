import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './hero/in-memory-data.service';

import { AppComponent } from './app.component';
import {HeroService} from './hero/hero.service';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroSearchComponent} from './components/hero-search/hero-search.component';
import {HighlightDirective} from './advanced/directives/highlight.directive';
import {UserService} from './advanced/services/user.service';
import {ContactService} from './advanced/contact/contact.service';

/* Contact Imports */
import { ContactModule }      from './advanced/contact/contact.module';
import {TitleComponent} from "./advanced/components/title.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    HighlightDirective,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ContactModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MaterialModule.forRoot()
  ],
  providers: [
    HeroService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
