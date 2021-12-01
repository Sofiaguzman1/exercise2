import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Boton1Component } from './boton1/boton1.component';
import { Boton2Component } from './boton2/boton2.component';

@NgModule({
  declarations: [
    AppComponent,
    Boton1Component,
    Boton2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
