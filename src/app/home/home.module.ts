import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ComponentModule } from '../component/component.module';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
],
  imports: [
    CommonModule,
    HomeRoutingModule,
ComponentModule ,
NgxTypedJsModule,
RouterModule

 ]
})
export class HomeModule { }
