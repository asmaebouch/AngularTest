import {ApplicationConfig, EnvironmentProviders, NgModule} from '@angular/core';
import {provideRouter, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

import { routes } from './app.routes';
import {HeaderComponent} from "./header/header.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

export const appConfig: { imports: any[]; declarations: any[]; providers: EnvironmentProviders[] } = {

    declarations: [
      AppComponent,

      HeaderComponent,

    ],
    imports: [
      BrowserModule,
      ReactiveFormsModule, // Add ReactiveFormsModule here
      FormsModule,
      HttpClientModule,
      RouterModule,


    ],
  providers: [provideRouter(routes)]
};
