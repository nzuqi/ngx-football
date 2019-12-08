import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from "jquery";
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule
  ],
  exports: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
