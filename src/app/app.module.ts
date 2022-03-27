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
import { FormValidationComponent } from './form-validation/form-validation.component';
import { UseMyServiceComponent } from './use-my-service/use-my-service.component';
import { UseMyRxComponent } from './use-my-rx/use-my-rx.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { RouterModule,Routes } from '@angular/router';
import { UseRouteParamComponent } from './use-route-param/use-route-param.component';


const appRoutes: Routes = [
  { path: '', component: TemplateVarComponent},
  { path : 'about', component: PipesComponent},
  { path: 'user/:id', component: UseRouteParamComponent}
 ];

@NgModule({
  declarations: [
    AppComponent,
    Input1Component,
    InputWithForComponent,
    Output1Component,
    TwoWayBindingsComponent,
    TemplateVarComponent,
    PipesComponent,
    Custom1Pipe,
    FormValidationComponent,
    UseMyServiceComponent,
    UseMyRxComponent,
    UsersComponent,
    UseRouteParamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
