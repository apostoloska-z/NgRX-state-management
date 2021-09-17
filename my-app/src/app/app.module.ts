import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherWidgetComponentComponent } from './Components/weather-widget-component/weather-widget-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Comp1Component } from './Components/comp1/comp1.component';
import { Comp2Component } from './Components/comp2/comp2.component';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { reducer } from './store/example.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ExampleEffects, ExampleEffects2 } from './store/example.effects';
import {FormatPipe} from './format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponentComponent,
    Comp1Component,
    Comp2Component,
    FormatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    StoreModule.forRoot({'example': reducer}),
    EffectsModule.forRoot([ExampleEffects, ExampleEffects2]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
