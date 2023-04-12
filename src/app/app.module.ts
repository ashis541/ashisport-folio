import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './component/component.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {


}
