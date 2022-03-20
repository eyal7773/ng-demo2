import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Input1Component } from './input1/input1.component';
import { InputWithForComponent } from './input-with-for/input-with-for.component';
import { Output1Component } from './output1/output1.component';
import { TwoWayBindingsComponent } from './two-way-bindings/two-way-bindings.component';
import {FormsModule } from '@angular/forms';
import { TemplateVarComponent } from './template-var/template-var.component';
import { PipesComponent } from './pipes/pipes.component';
import { Custom1Pipe } from './custom1.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Input1Component,
    InputWithForComponent,
    Output1Component,
    TwoWayBindingsComponent,
    TemplateVarComponent,
    PipesComponent,
    Custom1Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
