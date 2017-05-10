import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRouteModule }  from './common/app.route.module';
import { GlobalState } from './global.state';

import {FilterPipe, OrderBy} from './pipes'
import {MenuComponent} from "./common/menu"
import {HomeComponent} from "./home"

import { AlertModule, ModalModule, PaginationModule } from 'ngx-bootstrap';
import { Ng1Component } from './home/ng1/ng1.component';
import { Ng2Component } from './home/ng2/ng2.component';



declare var jQuery:any;

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    OrderBy,    
    MenuComponent,
    HomeComponent,
    Ng1Component,
    Ng2Component   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AppRouteModule,
    ModalModule.forRoot()    
  ],
  providers: [GlobalState],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
