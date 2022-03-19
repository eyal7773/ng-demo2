import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Input1Component } from './input1/input1.component';
import { InputWithForComponent } from './input-with-for/input-with-for.component';
import { Output1Component } from './output1/output1.component';

@NgModule({
  declarations: [
    AppComponent,
    Input1Component,
    InputWithForComponent,
    Output1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
